//Libraries
import { Box, Button, Heading, Spinner, Text } from "@chakra-ui/react"
import { collection, documentId, getDocs, query, where, writeBatch, addDoc } from "firebase/firestore"
import { useContext, useState } from "react"
import { toast } from "react-hot-toast"
import { Link } from 'react-router-dom'
import Confetti from 'react-confetti'

//Archivos locales
import { CartContext } from "../context/CartContext"
import { db } from "../services/firebase/firebaseConfig"
import FormOrder from "./FormOrder"
import useTitle from "../hooks/useTitle"

const CheckOut = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')
    const { cart, price, clearCart } = useContext(CartContext)

    useTitle('Checkout')

//Función que crea la orden y la almacena en firestore si todos los productos tienen stock
    const createOrder = async(name, email, phone) => {
        setLoading(true)

        try {
            setLoading(true)
            const objOrder = {
                buyer: {
                    name,
                    email,
                    phone
                },
                items: cart,
                price
            }
        
        
            const batch = writeBatch(db)

            const ids = cart.map(prod => prod.id)

            const productsRef = query(collection(db, 'products'), where(documentId(), 'in', ids))

            const productsAddedToCartFromFirestore = await getDocs(productsRef)
            const { docs } = productsAddedToCartFromFirestore

            const outOfStock = []

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart.quantity

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity } )
                } else {
                    outOfStock.push( { id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                const { id } = orderAdded
                setOrderId(id)

                clearCart()

                console.log('ID: ',id)
            } else {
                toast.error('Hay productos fuera de stock')
            }
        } catch (error) {
            toast.error(error)
        } finally {
            setLoading(false)
        }

    }

    if(loading) {
        return (<Spinner h='300px' w='300px' margin='5vw' p='100px'/>)
    }

    if(orderId) {
        return (
            <Box textAlign='center'>
                <Confetti />
                <Heading lineHeight={1.1} fontWeight={600} p={5}>Gracias por confiar en nosotros !</Heading>
                <Text p={5} >El Id de su compra es: <Text as='i'>{orderId}</Text></Text>
                <Button as={Link} to='/' m='30px' colorScheme='yellow'>Volver a la página principal</Button>
            </Box>
        )
    }

    if(cart.length === 0) {
        return (
            <Heading p={5} textAlign='center'>No hay productos en el carrito</Heading>
        )
    }

    return (
            <FormOrder onGenerate={createOrder} price={price} />

    )
}

export default CheckOut
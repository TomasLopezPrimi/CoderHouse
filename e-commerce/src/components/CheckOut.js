import { Box, Button, Heading, Spinner } from "@chakra-ui/react"
import { collection, documentId, getDocs, query, where, writeBatch, addDoc } from "firebase/firestore"
import { useContext, useState } from "react"
import { toast } from "react-hot-toast"
import { CartContext } from "../context/CartContext"
import { db } from "../services/firebase/firebaseConfig"

const CheckOut = () => {
    const [loading, setLoading] = useState(false)

    const { cart, price } = useContext(CartContext)

    const createOrder = async() => {
        setLoading(true)

        try {
            setLoading(true)
            const objOrder = {
                buyer: {
                    name: 'Tomas Lopez',
                    phone: '1234',
                    email: 'asdasd@asdasd.com'
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

                console.log(id)
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

    return (
        <Box>
            <Heading> CheckOut </Heading>
            <Button onClick={createOrder} > Crear orden</Button>
        </Box>
    )
}

export default CheckOut
import { Box, Text, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getDocs , collection, query, where} from 'firebase/firestore'
import { db } from "../services/firebase/firebaseConfig";


export default function ItemListConteiner ({greeting}) {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const {categoryId} = useParams()

    useEffect(() => {
      setLoading(true)

      const collectionRef = categoryId
        ? query(collection(db, 'products'), where('category', '==', categoryId) )
        : collection(db, 'products')

      getDocs(collectionRef).then(response => {
        const productsAdapted = response.docs.map(doc => {
          const data = doc.data()
          return {id: doc.id, ...data}
          })

        setProducts(productsAdapted) 
        
      }).catch(error => {
        setError(true)
        toast.error("Problema del servidor, actualice o vuelva más tarde")
        console.log(error)
      }).finally(() => {
        setLoading(false)
      })

    }, [categoryId])

    if(loading) {
      return <Spinner h='300px' w='300px' margin='5vw' p='100px'/> }

    if(error) {
      return <Text fontSize='xxx-large' p={8} textAlign='center'>Hubo un error, actualice la pagina</Text>
    }

  return (
    <Box alignItems={'center'}>
      <Text fontSize='xxx-large' textAlign='center' fontFamily={'Kansas'} p={8}>{greeting}</Text>
      <ItemList products={products} />
    </Box>
  )
}

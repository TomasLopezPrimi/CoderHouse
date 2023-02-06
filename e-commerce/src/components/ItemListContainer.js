import { Box, Text, Spinner } from "@chakra-ui/react";
import { toast } from "react-hot-toast";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import useTitle from "../hooks/useTitle";
import { getProducts } from "../services/firebase/firestore/products";
import useAsync from "../hooks/useAsync";


export default function ItemListConteiner ({greeting}) {

    useTitle('Productos', [])

    const {categoryId} = useParams()

    const getProductsByCategory = () => getProducts(categoryId)

    const { data: products, error, loading } = useAsync(getProductsByCategory, [categoryId])

  
    if(loading) {
      return <Spinner h='300px' w='300px' margin='5vw' p='100px'/> 
    }

    if(error) {
      toast.error('Hubo un error, actualice la pagina')
      return <Text fontSize='xxx-large' p={8} textAlign='center'>Hubo un error, actualice la pagina</Text>
    }

  return (
    <Box alignItems={'center'}>
      <Text fontSize='xxx-large' textAlign='center' fontFamily={'Kansas'} p={8}>{greeting}</Text>
      <ItemList products={products} />
    </Box>
  )
}

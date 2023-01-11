import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

export default function ItemListConteiner ({greeting}) {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const {categoryId} = useParams()

    //Llamado a "Fake Store API" y filtrar para setear solamente los productos de ropa
    useEffect(() => {
      setLoading(true)

      if(!categoryId) {
        fetch('https://fakestoreapi.com/products/')
        .then(response => response.json())
        .then(json => setProducts(json.filter(prod => 
          prod.category === "men's clothing" || prod.category === "women's clothing")))
        .catch(error => {
           setError(true)
           toast.error("Problema del servidor")
           console.log(error)
        }).finally(() => {
           setLoading(false)
        })
      } else {
        fetch("https://fakestoreapi.com/products/category/" + categoryId)
        .then(response => response.json())
        .then(json => setProducts(json))
        .catch(error => {
           setError(true)
           toast.error("Problema del servidor")
           console.log(error)
        }).finally(() => {
           setLoading(false)
        })
      }
    }, [categoryId])

    if(loading) {
      return <Text fontSize='xxx-large' p={8} textAlign='center' >Cargando...</Text>
    }

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

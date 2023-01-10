import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import ItemList from "./ItemList";
//import {getProducts} from "./asyncMock"

export default function ItemListConteiner ({greeting}) {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)


    //Llamado a "Fake Store API" y filtrar para setear solamente los productos de ropa
    useEffect(() => {
      setLoading(true)
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
    }, [])

    if(loading) {
      return <Text fontSize='xxx-large' p={8}>Cargando...</Text>
    }

    if(error) {
      return <Text fontSize='xxx-large' p={8}>Hubo un error, actualice la pagina</Text>
    }

  return (
    <Box alignItems={'center'}>
      {/* <Text fontSize='xxx-large' fontFamily={'Kansas'} p={8}>{greeting}</Text> */}
      <ItemList products={products} />
    </Box>
  )
}

import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { toast } from "react-hot-toast";
import { getProductById } from "../services/firebase/firestore/products";
import useAsync from "../hooks/useAsync";
import useTitle from "../hooks/useTitle";
import { Spinner, Text } from "@chakra-ui/react";

export default function ItemDetailContainer () {

  useTitle('Detalle producto', [])

  const {productId} = useParams()

  const getProduct = () => getProductById(productId)

  const { data: product, error, loading } = useAsync(getProduct, [productId])

  if(loading) {
    return <Spinner h='300px' w='300px' margin='5vw' p='100px'/> }

  if(error) {
    toast.error('Hubo un error, actualice la pagina')
    return <Text fontSize='xxx-large' p={8} textAlign='center'>Hubo un error, actualice la pagina</Text>
  }

  return (
    <ItemDetail product={product} />
  )
}
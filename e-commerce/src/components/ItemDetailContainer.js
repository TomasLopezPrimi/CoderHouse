import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer () {
  const [product, setProduct] = useState([])

  const {productId} = useParams()

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/' + productId)
      .then(res=>res.json())
      .then(json=>setProduct(json))
  }, [productId])

  return (
    <ItemDetail product={product} />
  )
}
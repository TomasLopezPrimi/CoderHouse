import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getDoc , doc} from "firebase/firestore";
import { db } from "../services/firebase/firebaseConfig";
import { toast } from "react-hot-toast";

export default function ItemDetailContainer () {
  const [product, setProduct] = useState([])

  const {productId} = useParams()

  useEffect(() => {
    const docRef = doc(db, 'products', productId)

    getDoc(docRef).then(response => {
      const dataProduct = response.data()
      const productAdapted = {id: response.id, ...dataProduct}
      setProduct(productAdapted)
    }).catch(error => {
      toast.error("Problema del servidor, actualice o vuelva más tarde")
      console.log(error)
    })
  }, [productId])

  return (
    <ItemDetail product={product} />
  )
}
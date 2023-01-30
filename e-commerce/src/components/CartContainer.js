import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartList from "./CartList";



export default function CartContainer() {

    const {cart} = useContext(CartContext)
    console.log(cart)

    return (
        <CartList products={cart} />
    )
}
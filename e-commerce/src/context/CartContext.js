import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const isInCart = (id) => cart.some(prod => id === prod.id)

    const addItem = (productToAdd) => {
        if (!isInCart(productToAdd.id)) {
            setCart(prev => {
                console.log(' Se agregó: ' , productToAdd)
                return [...prev, productToAdd]
            })
        } else {
            console.error('Ya está agregado')
        }
    }

    const removeItem = (id) => {
        setCart(prev => prev.filter(prod => prod.id !== id))
        console.log('Se removio el item con el id: ', id)
    }

    const getTotalQuantity = () => {
        let accu = 0
        cart.forEach(prod => {
            accu += prod.quantity
        })

        return accu
    }

    const totalQuantity = getTotalQuantity()

    const getTotalPrice = () => {
        let totalPrice = 0
        cart.forEach(prod => {
            totalPrice += prod.quantity * prod.price
        })
        return totalPrice
    }

    const price = getTotalPrice()
    
    return (
        <CartContext.Provider value={{addItem, removeItem, isInCart, totalQuantity, price, cart}} >
            { children }
        </CartContext.Provider>
    )
}
import { Box, Heading, Flex, Button } from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartList from "./CartList";



export default function CartContainer() {

    const {cart, price} = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <Heading textAlign='center' margin='20px'> Carrito Vacío... </Heading>
        )
    }

    return (
        <Box>
            <CartList products={cart} />
            <Flex marginTop='20px' justifyContent='center'>
                <Button variant='outline' bg='gray.200'>
                    Comprar todo por ${price}
                </Button>
            </Flex>
        </Box>
    )
}
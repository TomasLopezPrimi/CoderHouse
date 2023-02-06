import { Box, Heading, Flex, Button, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CartList from "./CartList";



export default function CartContainer() {

    const {cart, price, clearCart} = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <Box textAlign='center'>
                <Heading margin='20px'> Carrito Vacío... </Heading>
                <Text as={Link} to='/' >Volver a la página principal </Text>
            </Box>
            
        )
    }

    return (
        <Box>
            <CartList products={cart} />
            <Flex marginTop='20px' justifyContent='center' flexDir='row' gap='20'>
                <Button as={Link} to='/checkout' variant='outline' bg='green.300'>
                    Comprar todo por ${price.toFixed(2)}
                </Button>
                <Button onClick={clearCart} bg='red.300'>
                    Remover todos los productos
                </Button>
            </Flex>
        </Box>
    )
}
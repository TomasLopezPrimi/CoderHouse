import { Text, Box, Icon } from "@chakra-ui/react"
import { useContext } from "react"
import {GrCart} from 'react-icons/gr'
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function CartWidget ( {totalQuantity} ) {

  const {cart} = useContext(CartContext)


  return (
    <Box 
      as={Link} 
      to='/cart'
      display='flex'
      alignItems='center'
      p='5px'
      border='2px' 
      borderColor='gray.400'
      borderRadius='lg'
      bg='gray.200'
      onClick={() => console.log(cart)}  >
      {totalQuantity > 0 && <Text fontSize='m' color='black' mr='5px'>Ir al carrito </Text> }
      <Icon as={GrCart} marginRight='2' />
      <Text color='black'> {totalQuantity} </Text>
    </Box>
  )

}
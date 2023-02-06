import { Text, Box, Icon } from "@chakra-ui/react"
import { useContext } from "react"
import {GrCart} from 'react-icons/gr'
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function CartWidget () {

  const {totalQuantity} = useContext(CartContext)


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
      >
      <Icon as={GrCart} marginRight='2' />
      <Text color='black'> {totalQuantity} </Text>
    </Box>
  )

}
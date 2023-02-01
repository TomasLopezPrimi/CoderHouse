import { Flex } from "@chakra-ui/react";
import CartItem from "./CartItem";

export default function CartList({products}) {
  return (
    <Flex flexWrap={'wrap'} gap='3' marginTop='20px' justifyContent='center' >
      {products.map(prod => 
      <CartItem key={prod.id} name={prod.title} price={prod.price} imageURL={prod.image} description={prod.description} id={prod.id} quantity={prod.quantity} />)}
    </Flex>
  )
}
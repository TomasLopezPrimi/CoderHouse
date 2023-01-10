import { Box } from "@chakra-ui/react";
import Item from "./Item";

export default function ItemList({products}) {
  return (
    <Box display={'flex'} flexWrap={'wrap'} justifyContent='center' >
      {products.map(prod => <Item key={prod.id} name={prod.title} price={prod.price} imageURL={prod.image} />)}
    </Box>
  )
}
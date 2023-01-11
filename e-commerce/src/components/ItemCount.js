import { Box, Button, Icon } from "@chakra-ui/react"
import { useState } from "react"
import { FiShoppingCart } from 'react-icons/fi';

export default function ItemCount({stock}) {
  const [count, setCount] = useState(0)

  const addCount = () => {
    setCount(prev => prev < stock ? prev + 1 : prev)
  }

  const subCount = () => {
    setCount(prev => prev > 0 ? prev - 1 : prev)
  }

  return (
    <Box textAlign='center' marginInline='auto' >
      <Button variant='ghost' onClick={subCount}>-</Button>
      {count}
      <Button variant='ghost' onClick={addCount}>+</Button>
      <Button variant='ghost' marginLeft={'10px'}>
        Agregar al carrito
        <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} ml='10px' />
      </Button>
    </Box>
  )
}
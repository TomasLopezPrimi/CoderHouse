import { Box, Button } from "@chakra-ui/react"
import { useState } from "react"

export default function ItemCount({stock}) {
  const [count, setCount] = useState(0)

  const addCount = () => {
    setCount(prev => prev < stock ? prev + 1 : prev)
  }

  const subCount = () => {
    setCount(prev => prev > 0 ? prev - 1 : prev)
  }

  return (
    <Box>
      <Button onClick={subCount}>-</Button>
      {count}
      <Button onClick={addCount}>+</Button>
      <Button marginLeft={'10px'}>Agregar al carrito</Button>
    </Box>
  )
}
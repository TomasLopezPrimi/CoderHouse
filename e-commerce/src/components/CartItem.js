import { Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from "@chakra-ui/react"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"


const CartItem = ({ name, price, imageURL, id, quantity }) => {

  const { removeItem } = useContext(CartContext)
  const handleOnRemove = () => {
    removeItem(id)
  }

  return (
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        w='60%'
      >
        <Image
          boxSize='100%'
          maxW={{ base: '100%', sm: '200px' }}
          src={imageURL}
          alt={name}
        />
        <Stack spacing='5'>
          <CardBody>
            <Heading marginInline='auto' size='sm'>{name}</Heading>
          </CardBody>
          <CardFooter display='flex' flexDir='column'>
            <Text> Precio por unidad: ${price} </Text>
            <Text> Cantidad de productos seleccionados: {quantity} </Text>
            <Text> Precio Total: ${quantity * price} </Text>
            <Button variant='ghost' onClick={handleOnRemove} >Remover Items</Button>
          </CardFooter>
        </Stack>
      </Card>
  )
}

export default CartItem
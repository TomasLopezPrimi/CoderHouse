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
        w='50%'
      >
        <Image
          boxSize='100%'
          maxW={{ base: '100%', sm: '200px' }}
          src={imageURL}
          alt={name}
        />
        <Stack spacing='5' w='60%'>
          <CardBody>
            <Heading size='sm' textAlign='center'>{name}</Heading>
          </CardBody>
          <CardFooter display='flex' flexDir='column' gap='5px'>
            <Text> Precio por unidad: <Text as='b' color='green' >${price}</Text> </Text>
            <Text> Cantidad: <Text as='b' >{quantity}</Text> </Text>
            <Text as='i' fontSize='xl' textAlign='center'> Precio Total: <Text as='b' color='green' > ${quantity * price} </Text> </Text>
            <Button variant='outline' marginTop='20px' colorScheme='red' onClick={handleOnRemove} >Remover Items</Button>
          </CardFooter>
        </Stack>
      </Card>
  )
}

export default CartItem
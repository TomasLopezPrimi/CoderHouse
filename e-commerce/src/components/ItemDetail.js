import { 
  Card, 
  CardBody, 
  Image, 
  Stack, 
  Heading, 
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Box,
  Button,
  Spinner
 } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

 import ItemCount from './ItemCount'

export default function ItemDetail ({product}) {
  const [loading, setLoading] = useState(true)
  
  const [id, title, image, description, price] = [product.id, product.title, product.image, product.description, product.price]

  const [quantity, setQuantity] = useState(0)

  const { addItem, isInCart, removeItem } = useContext(CartContext)

  const handleOnAdd = (quantity) => {
    setQuantity(quantity)
    addItem({id, title, price, quantity, image})
  }

  const handleOnRemove = () => {
    setQuantity(0)
    removeItem(id)
  }

  useEffect(() => {
    if (product.id !== undefined) {
      setLoading(false)
      console.log('Pasó de true a false')
      }
  }, [product])

  if (loading) {
    return (<Spinner h='300px' w='300px' margin='5vw' p='100px'/>)
  }

  return (
    <Card maxW='m' maxH='m' marginInline='auto'>
      <CardBody>
        <Image
          src={image}
          alt={title}
          boxSize='400px'
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{title}</Heading>
          <Text>{description} </Text>
          <Text color='blue.600' fontSize='2xl'>
            ${price} - Cantidad seleccionada:  {quantity}
          </Text>
        </Stack>
      </CardBody>
      <Divider />

      {/* Esta parte de la Cart se va a terminar resolviendo en las ultimas clases.. */}

      { isInCart(id) ? (
          <Box textAlign='center' p='10px'>
            <Button as={Link} to={'/'} m='10px'>Terminar compra</Button>
            <Button onClick={handleOnRemove} m='10px'> Remover productos </Button>
          </Box>
        ) : (
        <CardFooter>
          <ButtonGroup spacing='2'>
            {/* La API no tiene detalle de stock, pongo un default de 10 para todos los productos */}
            <ItemCount stock={10} onAdd={handleOnAdd} />
          </ButtonGroup>
        </CardFooter>
        )
      }
    </Card>
  )
}
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
  
  const [id, title, image, description, price, stock] = [product.id, product.title, product.image, product.description, product.price, product.stock]

  const { addItem, isInCart, removeItem } = useContext(CartContext)

  const handleOnAdd = (quantity) => {
    addItem({id, title, price, quantity, image})
  }

  const handleOnRemove = () => {
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
            ${price} - Stock : {stock}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      { isInCart(id) ? (
          <Box textAlign='center' p='10px'>
            <Button as={Link} to={'/'} m='10px'>Terminar compra</Button>
            <Button onClick={handleOnRemove} m='10px'> Remover productos </Button>
          </Box>
        ) : (
        <CardFooter>
          <ButtonGroup spacing='2'>
            <ItemCount stock={stock} onAdd={handleOnAdd} />
          </ButtonGroup>
        </CardFooter>
        )
      }
    </Card>
  )
}
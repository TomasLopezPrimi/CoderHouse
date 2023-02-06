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
 } from "@chakra-ui/react";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

 import ItemCount from './ItemCount'

export default function ItemDetail ({product}) {  
  
  //Producto:
  const [id, title, image, description, price, stock] = [product.id, product.title, product.image, product.description, product.price, product.stock]

  const { addItem, isInCart, removeItem } = useContext(CartContext)

  const handleOnAdd = (quantity) => {
    addItem({id, title, price, quantity, image})
  }

  const handleOnRemove = () => {
    removeItem(id)
    toast.success('Se removió el producto del carrito')
  }


  return (
    <Card maxW={{base: '80%', md:'90%', lg: '40%'}} maxH='m' marginInline='auto'>
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
            <Button as={Link} to='/cart' m='10px' colorScheme='green' >Terminar compra</Button>
            <Button onClick={handleOnRemove} m='10px' colorScheme='red'> Remover/Editar productos </Button>
            <Button as={Link} to='/' m='10px' colorScheme='yellow'>Seguir Navegando</Button>
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
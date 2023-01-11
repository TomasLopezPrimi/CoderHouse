import { 
  Card, 
  CardBody, 
  Image, 
  Stack, 
  Heading, 
  Text,
  Divider,
  CardFooter,
  ButtonGroup
 } from "@chakra-ui/react";

 import ItemCount from './ItemCount'

export default function ItemDetail ({product}) {
  const [title, image, description, price] = [product.title, product.image, product.description, product.price]

  return (
    <Card maxW='sm' maxH='m' marginInline='auto'>
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
            ${price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>
          {/* La API no tiene detalle de stock, pongo un default de 10 para todos los productos */}
          <ItemCount stock={10} />
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}
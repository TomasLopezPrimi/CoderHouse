import { Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from "@chakra-ui/react"


const CartItem = ({ name, price, imageURL, id, description }) => {
    return (
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
          h='100px'
          w='60%'
        >
          <Image
            // objectFit='cover'
            boxSize='100px'
            maxW={{ base: '100%', sm: '200px' }}
            src={imageURL}
            alt={name}
          />

          <Stack>
            <CardBody>
              <Heading size='sm'>{name}</Heading>

              <Text py='2'> {description} </Text>
            </CardBody>

            <CardFooter>
              <Text> {price} </Text>
            </CardFooter>
          </Stack>
        </Card>
    )
}

export default CartItem
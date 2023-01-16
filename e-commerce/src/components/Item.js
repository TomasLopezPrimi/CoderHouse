import {
  Flex,
  Box,
  Image,
  useColorModeValue,
  Icon,
  Tooltip,
  Text,
  Button,
} from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Item({imageURL, name, price, id}) {
  return (
    <Flex p={50} marginInline='30px' w='450px' h='640px' alignItems="center" justifyContent="center" >
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
        h='100%'>
        <Image
          src={imageURL}
          p='10px'
          boxSize='400px'
          alt={`Picture of ${name}`}
          roundedTop="lg"
          borderRadius='20px'
        />

        <Box p="6"  >
          <Flex justifyContent="space-between" alignContent="center">
            <Text
              fontSize="sm"
              fontFamily='heading'
              fontWeight="semibold"
              lineHeight="tight"
              marginInline={'auto'}
              >
              {name}
            </Text>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center" mt='5px' marginBottom='auto' >
            <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
              <Box as="span" color={'gray.600'}>$</Box>
              {price.toFixed(2)}
            </Box>
            <Tooltip
              label="Detalle del producto"
              bg="white"
              placement={'top'}
              color={'gray.800'}
              fontSize={'1.2em'}>
              <Button as={Link} to={'/detail/' + id} >
                Detalle
                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} ml='10px' />
              </Button>
            </Tooltip>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

export default Item;

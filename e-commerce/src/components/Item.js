import {
  Flex,
  Box,
  Image,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  Text,
} from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';

function Item({imageURL, name, price}) {
  return (
    <Flex p={50} marginInline='30px' maxW='450px' h='600px' alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative">
        <Image
          src={imageURL}
          p='10px'
          boxSize='400px'
          alt={`Picture of ${name}`}
          roundedTop="lg"
        />

        <Box p="6">
          <Flex justifyContent="space-between" alignContent="center">
            <Text
              fontSize="sm"
              fontWeight="semibold"
              lineHeight="tight"
              marginInline={'auto'}>
              {name}
            </Text>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={'top'}
              color={'gray.800'}
              fontSize={'1.2em'}>
              <chakra.a href={'#'} display={'flex'}>
                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} ml='10px' />
              </chakra.a>
            </Tooltip>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center" mt='5px'>
            <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
              <Box as="span" color={'gray.600'}>
                $
              </Box>
              {price.toFixed(2)}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

export default Item;

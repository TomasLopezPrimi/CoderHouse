import { Text, Box, Icon } from "@chakra-ui/react"
import {GrCart} from 'react-icons/gr'

export default function CartWidget () {
  return (
    <Box 
      as='button' 
      display='flex'
      alignItems='center'
      p='5px'
      border='2px' 
      borderColor='gray.400'
      borderRadius='lg'
      bg='gray.200'  >
      <Icon as={GrCart} marginRight='2' />
      <Text color='black'>0</Text>
    </Box>
  )

}
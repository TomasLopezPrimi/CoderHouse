import React from 'react';
import {
  ChakraProvider,
  Box,
  theme,
} from '@chakra-ui/react';
import Navbar from './components/Navbar';
import ItemListConteiner from './components/ItemListContainer'

function App() {
  return (
    <ChakraProvider>
      <Box fontSize="xl" textAlign='center'>
        <Navbar />
        <ItemListConteiner greeting={'Saludo'} />
      </Box>
    </ChakraProvider>
  );
}

export default App;

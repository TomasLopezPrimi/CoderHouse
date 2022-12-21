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
    <ChakraProvider theme={theme}>
      <Box fontSize="xl">
        <Navbar />
        <ItemListConteiner greeting={'Saludo'} />
      </Box>
    </ChakraProvider>
  );
}

export default App;

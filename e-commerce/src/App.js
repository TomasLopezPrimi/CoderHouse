import React from 'react';
import {
  ChakraProvider,
  Box
} from '@chakra-ui/react';
import Navbar from './components/Navbar';
import ItemListConteiner from './components/ItemListContainer'
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <ChakraProvider>
      <Toaster 
        position="bottom-center"
        reverseOrder={false}/>
      <Box fontSize="xl" textAlign='center'>
        <Navbar />
        <ItemListConteiner greeting={'Listado productos'} />
      </Box>
    </ChakraProvider>
  );
}

export default App;

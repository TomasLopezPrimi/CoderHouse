//Librerias
import React from 'react';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom'

import Navbar from './components/Navbar';

//Context
import { CartProvider } from './context/CartContext';
import AppRouter from './routes/AppRouter';

function App() {
    return (
    <ChakraProvider>
      <Toaster position="bottom-center" reverseOrder={false}/>
      <Box>
        <BrowserRouter>
          <CartProvider>
            <Navbar />
            <AppRouter />
          </CartProvider>
        </BrowserRouter>
      </Box>
    </ChakraProvider>
  );
}

export default App;

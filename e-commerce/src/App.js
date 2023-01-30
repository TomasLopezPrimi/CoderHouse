//Librerias
import React from 'react';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


//Components
import Navbar from './components/Navbar';
import ItemListConteiner from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContainer from './components/CartContainer';
import CheckOut from './components/CheckOut';

//Context
import { CartProvider } from './context/CartContext';

function App() {
    return (
    <ChakraProvider>
      <Toaster position="bottom-center" reverseOrder={false}/>
      <Box>
        <CartProvider>
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path='/' element={<ItemListConteiner greeting={'Listado productos'} />} />
                <Route path='/category/:categoryId' element={<ItemListConteiner />} />
                <Route path='/detail/:productId' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<CartContainer />} />
                <Route path='/checkout' element={<CheckOut />} />
              </Routes>
            </BrowserRouter>
        </CartProvider>
      </Box>
    </ChakraProvider>
  );
}

export default App;

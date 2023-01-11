import React from 'react';
import {
  ChakraProvider,
  Box
} from '@chakra-ui/react';
import Navbar from './components/Navbar';
import ItemListConteiner from './components/ItemListContainer'
import { Toaster } from 'react-hot-toast';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <ChakraProvider>
      <Toaster position="bottom-center" reverseOrder={false}/>
      <Box>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListConteiner greeting={'Listado productos'} />} />
            <Route path='/category/:categoryId' element={<ItemListConteiner />} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </ChakraProvider>
  );
}

export default App;

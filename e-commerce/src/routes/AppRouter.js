import { Routes, Route } from 'react-router-dom'

//Components
import CartContainer from '../components/CartContainer'
import CheckOut from '../components/CheckOut'
import ItemDetailContainer from '../components/ItemDetailContainer'
import ItemListContainer from '../components/ItemListContainer'


export default function AppRouter() {
    return (
        <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Listado productos'} />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/detail/:productId' element={ <ItemDetailContainer /> } />
            <Route path='/cart' element={<CartContainer />} />
            <Route path='/checkout' element={ <CheckOut />} />
        </Routes>
    )
}
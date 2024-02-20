import React from 'react'
import {Route,Routes,Navigate, useLocation ,useNavigate} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import ProductDetails from './Pages/ProductDetails'
import NotFound from './Pages/NotFound'
import Categories from './Pages/Categories'
import Products from './Pages/Products'
import Cart from './Pages/Cart'
import LoginRegister from './Pages/LoginRegister'
import './App.css'
import {useSelector}from 'react-redux'
export default function App() {
  const {token}=useSelector(state=>state.auth)
  return (
    <>
<Navbar/>
<Routes>
  <Route exact path='/' element={<Home/>}/>
  <Route path='/product-details/:id/:name/' element={<ProductDetails/>}/>
  <Route path='/Categories' element={<Categories/>}/>
  <Route path='/products/:categoryId' element={<Products/>}/>
  <Route path='/cart' element={<Cart/>}/>
  <Route path='/login-register' element={<LoginRegister/>}/>
   <Route path="*" element={<NotFound/>} />

</Routes>
<Footer/>

    </>
  )
}

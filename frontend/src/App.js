import './App.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './Pages/Shop.jsx'
import ShopCategory from './Pages/ShopCategory.jsx'
import LoginSignup from './Pages/LoginSignup.jsx'
import Product from './Pages/Product.jsx'
import Cart from './Pages/Cart.jsx'
import Footer from './Components/Footer/Footer.jsx'
import men_banner from './Components/Assets/Frontend_Assets/banner_mens.png'
import women_banner from './Components/Assets/Frontend_Assets/banner_women.png'
import kids_banner from './Components/Assets/Frontend_Assets/banner_kids.png'
import Wishlist from './Pages/Wishlist.jsx'

function App() {
   return (
      <div>
         <BrowserRouter>
            <Navbar />
            <Routes>
               <Route path='/' element={<Shop />} />
               <Route
                  path='/mens'
                  element={<ShopCategory banner={men_banner} category='men' />}
               />
               <Route
                  path='/womens'
                  element={
                     <ShopCategory banner={women_banner} category='women' />
                  }
               />
               <Route
                  path='/kids'
                  element={<ShopCategory banner={kids_banner} category='kid' />}
               />
               <Route path='/login' element={<LoginSignup />} />
               <Route path='/product' element={<Product />}>
                  <Route path='/product/:productId' element={<Product />} />
               </Route>
               <Route path='/cart' element={<Cart />} />
               <Route path='/fav' element={<Wishlist />} />
            </Routes>
            <Footer />
         </BrowserRouter>
      </div>
   )
}

export default App

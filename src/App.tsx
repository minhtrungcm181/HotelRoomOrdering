
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Breakfast from './pages/Breakfast'
import Lunch from './pages/Lunch'
import Dinner from './pages/Dinner'
import Navbar from './Components/Navbar'
import "bootstrap/dist/css/bootstrap.css"
import { ShoppingCartProvider } from './context/ShoppingCartContext'
import { ItemContext, ItemProvider } from './context/ItemContext'
import ShoppingCart from './pages/ShoppingCart'


function App() {
  return (
    <div className="flex flex-col lg:flex-row lg:min-h-screen">
      <ShoppingCartProvider>
        <ItemProvider>
       <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/breakfast" element={<Breakfast />}/>
          <Route path="/cart" element={<ShoppingCart/>} />
        </Routes>
      </BrowserRouter>
      </ItemProvider>
      </ShoppingCartProvider>
    </div>
  );
}

export default App

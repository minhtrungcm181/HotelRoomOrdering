
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Breakfast from './pages/Breakfast'
import Lunch from './pages/Lunch'
import Dinner from './pages/Dinner'
import Navbar from './Components/Navbar'


function App() {
  return (
    <div className="flex flex-col lg:flex-row lg:min-h-screen">
       <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/breakfast" element={<Breakfast />}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App

import React from 'react'
import Navbar from './components/common/Navbar'
import Home from './pages/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Products from './pages/products'


function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
         <Route path="/products" element={<Products/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

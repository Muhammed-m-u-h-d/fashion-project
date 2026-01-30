import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import PageNavbar from '../components/common/PageNavbar'
import Footer from '../components/common/Footer'
function Products() {
      const [products,setProducts]=useState([])
   
    useEffect(()=>{
        axios.get(`/products.json`)
        .then((res)=>{
            setProducts(res.data)
        })
        .catch((error)=>console.log(error))
    },[])

    if (!products.length) {
  return <p className="text-center mt-40">Loading...</p>;
}


  return (
    <>
    <PageNavbar/>
    <div className='grid grid-cols-2  sansation-light pt-28'>
      {products.map((val)=>(
        <div key={val.id} className='flex flex-col items-center border border-gray-300 p-3'>
         <img src="/products/jackets/1.png" alt="" className='bg-gray-100 rounded-xl'/>
         <p className='line-clamp-1'>{val.name}</p>
         <p>₹{val.price}</p>
        </div>
      ))}
    
    </div>
    
      <Footer/>
    </>
  )
}

export default Products

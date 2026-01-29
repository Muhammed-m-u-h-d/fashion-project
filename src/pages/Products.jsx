import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import PageNavbar from '../components/common/PageNavbar'
function Products() {
      const [products,setProducts]=useState([])
   
    useEffect(()=>{
        axios.get(`/products.json`)
        .then((res)=>{
            setProducts(res.data)
        })
        .catch((error)=>console.log(error))
    },[])

  return (
    <>
    <PageNavbar/>
    <div className='grid grid-cols-2  sansation-light mt-[7.3rem]'>
      {products.map((val)=>(
        <div key={val.id} className='flex flex-col items-center border border-gray-300 p-3'>
         <img src={val.image} alt="" />
         <p className='line-clamp-1'>{val.name}</p>
         <p>₹{val.price}</p>
        </div>
      ))}
    </div>
    </>
  )
}

export default Products

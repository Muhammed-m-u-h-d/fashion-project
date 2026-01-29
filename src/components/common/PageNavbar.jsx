
import { RiShoppingBag4Fill } from "react-icons/ri";
import { RiSearch2Line } from "react-icons/ri";
import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
function PageNavbar() {
 
  return (
   
   <div className="fixed top-0 w-full backdrop-blur-xs shadow-xl sansation-light">
    <div className="p-5 pb-0 flex gap-3">
    <form onSubmit={(e)=>e.preventDefault()}  className=' flex items-center relative w-full'>
       <button className="absolute left-2 ">
        <RiSearch2Line size={30} />
        </button>
        <input type="text" placeholder="Search For Men's Fashions" className='border border-black bg-white/30 w-full p-3 pl-12 outline-none' />
    </form>
    <button><RiShoppingBag4Fill size={40}/></button>
    </div>
    <div className="p-1 pl-5  border-t border-gray-300 mt-3 flex items-center justify-between pr-5">
        <button className="text-">Filter</button>
        <MdOutlineKeyboardArrowDown size={25}/>
    </div>
    </div>

   
    
  )
}

export default PageNavbar

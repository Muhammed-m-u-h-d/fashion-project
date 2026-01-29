import { RiMenu2Fill } from "react-icons/ri";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { RiSearch2Line } from "react-icons/ri";
import MenuDrawer from "./Menu/MenuDrawer";
import { useState } from "react";
function Navbar() {
  const [menuBar,setMenuBar]=useState(false)
  console.log(menuBar)
  return (
    <div className=' p- shadow-lg shadow-black/10   backdrop-blur-xs  sansation-light fixed top-0 w-full z-50'>
      <div className="p-4">
    <div className='flex justify-between   '> 
      <div className="relative">
      <button onClick={()=>setMenuBar(true)}>
      <RiMenu2Fill size={32}/>
      </button>
     
      </div>
      <h1 className='text-4xl sansation-bold tracking-wider'>Rétro<span className='text-gray-600'>X</span></h1>
      <button>
      <RiShoppingBag4Fill size={32}/>
      </button>
    </div>
    <form onSubmit={(e)=>e.preventDefault()}  className='pt-4 flex items-center relative'>
       <button className="absolute left-2 ">
        <RiSearch2Line size={30} />
        </button>
        <input type="text" placeholder="Search For Men's Fashions" className='border border-black bg-white/30 w-full p-3 pl-12 outline-none' />
    </form>
    </div>
     {menuBar ? <div className="absolute top-0 p-0 "><MenuDrawer setMenuBar={setMenuBar}/></div> : null}
    </div>
  )
}

export default Navbar

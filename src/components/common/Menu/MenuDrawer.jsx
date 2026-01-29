import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RiUserLine } from "react-icons/ri";
import { 
  LuPackage, 
  LuHeart, 
  LuLogOut, 
  LuInfo, 
  LuNotepadText, 
  LuCircleHelp, 
  LuUndo2 
} from "react-icons/lu";

function MenuDrawer({ setMenuBar }) {
  return (
    <div className="bg-white w-[80vw] h-[100vh] pb-10 p-5 shadow-xl shadow-black/40 flex flex-col">
      
      
      <div className="sticky top-0 bg-white pb-5 z-20">
        <button onClick={() => setMenuBar(false)}>
          <AiOutlineClose size={30} />
        </button>

        <div className="flex flex-col items-center gap-10 p-8 pt-0 border-b border-gray-300">
          <h1 className='text-4xl sansation-bold tracking-wider'>
            Rétro<span className='text-gray-600'>X</span>
          </h1>
          <div className="bg-gray-100 p-6 rounded-full text-gray-500">
            <RiUserLine size={50} />
          </div>
        </div>
      </div>

      
      <div className="mt-5 overflow-y-auto [scrollbar-width:none]">

        
        <div>
          <h3 className="text-xl text-gray-500 tracking-wide">ACCOUNT</h3>

          <MenuItem icon={<RiUserLine size={25} />} text="Login / Signup" />
          <MenuItem icon={<LuPackage size={25} />} text="My Orders" />
          <MenuItem icon={<LuHeart size={25} />} text="Wishlist" />
          <MenuItem icon={<LuLogOut size={25} />} text="Logout" />
        </div>

    
        <div className="mt-5">
          <h3 className="text-xl text-gray-500 tracking-wide">BRAND</h3>

          <MenuItem icon={<LuInfo size={25} />} text="About" />
          <MenuItem icon={<LuNotepadText size={25} />} text="Journal" />
        </div>

    
        <div className="mt-5">
          <h3 className="text-xl text-gray-500 tracking-wide">SUPPORT</h3>

          <MenuItem icon={<LuCircleHelp size={25} />} text="Help / FAQ" />
          <MenuItem icon={<LuUndo2 size={25} />} text="Return Policy" />
        </div>

      </div>

    </div>
  );
}

const MenuItem = ({ icon, text }) => (
  <div className="border-b border-gray-300">
    <div className="flex items-center gap-3 text-black/80 mt-4 active:bg-gray-100 p-3 rounded-lg">
      {icon}
      <p className="text-lg">{text}</p>
    </div>
  </div>
);

export default MenuDrawer;

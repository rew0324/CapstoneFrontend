import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className='bg-blue-600 p-4'>
        <nav className='max-w[1240px] py-3 px-6 items-center flex justify-between mx-auto'>
            <NavLink className='text-3xl pl-7 font-bold text-white' to="/">
                RPA Business Consultancy
            </NavLink>
            {
                toggle ? 
                    <AiOutlineClose onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>
                    :
                    <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>

            }
            
            
            <ul className='hidden md:flex text-white gap-5'>
                <li className='p-4'><NavLink to='/'>Home</NavLink></li>
                <li className='p-4'><NavLink to='/'>Cash Flow Calculator</NavLink></li>
                <li className='p-4'><NavLink to='/about'>About Us</NavLink></li>
                <li className='p-4'><NavLink to='/contact'>Contact</NavLink></li>
            </ul>

            {/*For responsive menu */}
            <ul className={`duration-300 md:hidden w-full h-screen text-white fixed bg-[#023047] top-[110px] left-[-100%] ${toggle ? 'left-[0]' : 'left-[-100%]'}`}>
                <li className='p-4'><NavLink to='/'>Home</NavLink></li>
                <li className='p-4'><NavLink to='/'>Cash Flow Calculator</NavLink></li>                
                <li className='p-4'><NavLink to='/about'>About Us</NavLink></li>
                <li className='p-4'><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
        </nav>
    </div>        
  )
}


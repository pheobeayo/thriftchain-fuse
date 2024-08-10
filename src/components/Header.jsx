import logo from '../assets/logo.svg'
import { NavLink }from 'react-router-dom'
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <header className='text-white'>
        <div className='w-[90%] mx-auto py-10 px-2 lg:flex md:flex justify-between items-center hidden'>
         <NavLink to="/"><img src={logo} alt="" className='w-[170px] h-auto' /></NavLink>
      <nav className='flex justify-between items-center'>
            <NavLink to="/" className="mr-10 hover:border-b hover:border-[#9C0F94] hover:text-[#9C0F94]">Home </NavLink>
            <NavLink to="/about" className='hover:border-b hover:border-[#9C0F94] hover:text-[#9C0F94]'>About Us </NavLink>
        </nav>
        <w3m-button />
        </div>
        <div className='w-[90%] mx-auto py-10 px-2 flex justify-between items-center lg:hidden md:hidden'>
         <NavLink to="/"><img src={logo} alt="" className='w-[170px] h-auto' /></NavLink>
         {showMenu ? <IoMdClose onClick={(e) => setShowMenu(false)} className="text-[30px]"/> : <CiMenuFries onClick={(e) => setShowMenu(true)} className="text-[30px]" />}
        {showMenu && ( <nav className='absolute top-28 w-[100%] bg-[#060E37] p-6 flex flex-col items-center text-center'>
      <div className='flex flex-col'>
            <NavLink to="/" className="hover:border-b hover:border-[#9C0F94] hover:text-[#9C0F94] mb-4">Home </NavLink>
            <NavLink to="/about" className='hover:border-b hover:border-[#9C0F94] hover:text-[#9C0F94] mb-4'>About Us </NavLink>
        </div>
       <div className='mt-6'>
        <w3m-button />
        </div>
        </nav>)}
        </div>
    </header>
  )
}

export default Header
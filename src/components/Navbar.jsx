import logo from '../assets/image/logo1.png';
import NavLinks from './NavLinks';
import Button from './Button';
import { IoIosMenu } from "react-icons/io";
import { HiXMark } from "react-icons/hi2";
import { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className='flex items-center justify-between py-0 bg-yellow-500 px-8'>
        <div className='flex justify-between z-50 p-5 md:w-auto w-full'>
          <img src={logo} alt="logo" className='w-10' />
          <div className='text-3xl md:hidden' onClick={() => setOpen(!open)}>
            {open ? <HiXMark /> : <IoIosMenu />}
          </div>
        </div>
        <ul className='md:flex hidden justify-evenly capitalize'>
          <NavLinks />
        </ul>
        <div className='md:block hidden'>
          <Button />         
        </div>

        {/* mobile nav */}
        <ul className={`md:hidden bg-white absolute w-full h-full bottom-0 py-25 pl-4 duration-500 ${open ? "left-0" : "left-[-100%]"}`}>
           
          <NavLinks />
          <div className='py-5'>
            <Button />         
          </div>
        </ul> 
      </nav>
    </>
  )
}

export default Navbar;

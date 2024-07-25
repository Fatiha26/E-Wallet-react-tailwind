import logo from '../assets/image/logo1.png';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
const Navbar = () => {
  return (
    <>
    <div className='flex items-center justify-between py-3 bg-yellow-500 px-8'>
      <div className='flex items-center'>
        <span className='text-lg font-mono'>e-wallet</span>
        <img src={logo} alt="logo" className='w-10' />
      </div>
      <nav>
        <ul className='flex justify-evenly capitalize'>
            <li><a href="#" className='py-2 px-6 text-md border-2 border-transparent hover:border-white transition delay-150 mr-4 border-dotted rounded-3xl'>services</a></li><span><MdOutlineKeyboardArrowDown/></span>
          <li><a href="#" className='py-2 px-6 text-md border-2 border-transparent hover:border-white transition delay-150 mr-4 border-dotted rounded-3xl'>Help</a></li>
            <li><a href="#" className='py-2 px-6 text-md border-2 border-transparent hover:border-white transition delay-150 mr-4 border-dotted rounded-3xl'>career</a></li>
            <li><a href="#" className='py-2 px-6 text-md border-2 border-transparent hover:border-white transition delay-150 mr-4 border-dotted rounded-3xl'>about</a></li>
            <li><a href="#" className='py-2 px-6 text-md border-2 border-transparent hover:border-white transition delay-150 mr-4 border-dotted rounded-3xl'>blog</a></li>
        </ul>
      </nav>
      <button className='py-2 px-6 rounded-3xl text-md border border-white font-bold shadow'>e-wallet App</button>
      <span className='text-md'> En | Bn</span>
      
    </div>
    </>
  )
}

export default Navbar

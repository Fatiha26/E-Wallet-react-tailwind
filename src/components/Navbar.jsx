import { Link } from 'react-router-dom';
import logo from '../assets/image/logo1.png';
import NavLinks from './NavLinks';
const Navbar = () => {
  return (
    <>
    <nav className='flex items-center justify-between py-3 bg-yellow-500 px-8'>
      <div className='flex items-center'>
        <span className='text-lg font-mono'>e-wallet</span>
        <img src={logo} alt="logo" className='w-10' />
      </div>
      <ul className='flex justify-evenly capitalize'>
            <li>
              <Link to="/" className='py-2 px-6 text-md border-2 border-transparent hover:border-white transition delay-150 mr-4 border-dotted rounded-3xl'>
                services
              </Link>
            </li>   
            <NavLinks />     
      </ul>      
    </nav>
    </>
  )
}

export default Navbar

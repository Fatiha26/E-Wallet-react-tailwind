import logo from '../assets/image/logo1.png'
const Nav = () => {
  return (
    <div className='flex items-center justify-around py-4 bg-yellow-500'>
      <div className='flex items-center'>
        <span className='text-2xl font-mono'>e-wallet</span>
        <img src={logo} alt="logo" className='w-12' />
      </div>
      <nav>
        <ul className='flex justify-evenly capitalize'>
            <li><a href="#" className='py-4 px-8'>services</a></li>
            <li><a href="#" className='py-4 px-8'>Business</a></li>
            <li><a href="#" className='py-4 px-8'>Help</a></li>
            <li><a href="#" className='py-4 px-8'>career</a></li>
            <li><a href="#" className='py-4 px-8'>about</a></li>
            <li><a href="#" className='py-4 px-8'>blog</a></li>
        </ul>
      </nav>
      <button>e-wallet App</button>
      <span> En | Bn</span>
      
    </div>
  )
}

export default Nav

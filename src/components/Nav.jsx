import logo from '../assets/image/logo1.png'
const Nav = () => {
  return (
    <div>
      <div>
        <span>e-wallet</span>
        <img src={logo} alt="logo" />
      </div>
      <nav>
        <ul>
            <li><a href="#">services</a></li>
            <li><a href="#">Business</a></li>
            <li><a href="#">Help</a></li>
            <li><a href="#">career</a></li>
            <li><a href="#">about</a></li>
            <li><a href="#">blog</a></li>
        </ul>
        <button>e-wallet App</button>
        <span> En | Bn</span>
      </nav>
      
    </div>
  )
}

export default Nav

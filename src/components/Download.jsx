import bgImg from '../assets/image/bg.png'
import app from '../assets/image/mock.png'
import google from '../assets/image/google.png'
import apple from '../assets/image/apple.png'


const Download = () => {
  return (
    <>
     <div className="w-full"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(${bgImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh' 
      }}>

        <div>
           <h3>Download e-wallet App</h3>
           <p>Open your Account from the e-wallet App in a few simple steps and get up to 125 TK bonus!</p>
           <div>
             <img src={google} alt="google" />
             <img src={apple} alt="apple" />        
           </div>
        </div>
        <div>
           <img src={app} alt="app" />
        </div>
     </div>
      
    </>
  )
}

export default Download

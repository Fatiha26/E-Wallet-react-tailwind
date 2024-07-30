import bgImg from '../assets/image/bg.png'
import app from '../assets/image/mock.png'
import google from '../assets/image/google.png'
import apple from '../assets/image/apple.png'


const Download = () => {
  return (
    <>
     <div className="w-full flex justify-center items-center gap-24"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(${bgImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh' 
      }}>

        <div className='text-white'>
           <h3 className='text-4xl font-bold'>Download e-wallet App</h3>
           <p className='text-xl mt-4'>Open your Account from the e-wallet App in a few simple steps and <br/> get up to 125 TK bonus!</p>
           <div className='flex items-center mt-4'>
             <img src={google} alt="google"  className='h-20'/>
             <img src={apple} alt="apple"  className='h-14'/>        
           </div>
        </div>
        <div >
           <img src={app} alt="app" className='w-[300px] h-[520px]' />
        </div>
     </div>
      
    </>
  )
}

export default Download

import bgImg from '../assets/image/bg.png'
import app from '../assets/image/mock.png'

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
           <h3></h3>
           <p></p>
           <div>
             
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

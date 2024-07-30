import bgImg from '../assets/image/bg.png'
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
     </div>
      
    </>
  )
}

export default Download

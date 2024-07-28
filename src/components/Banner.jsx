import hero from '../assets/image/5r.png'
const banner = () => {
  return (
    <div className='grid md:grid-cols-2 mx-20 my-20 gap-9 items-center'>
       <div>
          <h1 className='text-4xl'>Get started with <span className='text-5xl text-purple-700 font-bold'>e-wallet</span> & </h1>
          <p className='text-lg mt-4'>Enjoy the convenience of managing your money anytime, anywhere. Pay bills, recharge, and shop online—all with a few taps.</p>
          
          <div className='mt-6'>
            <button className='py-2 px-6 rounded-3xl text-md border text-purple-700 border-white font-bold shadow-md shadow-gray-500 mr-4'>Get Started</button>
            <button className='py-2 px-6 rounded-3xl text-md border text-purple-700 border-white font-bold shadow-md shadow-gray-500 '>Download App</button>
          </div>

       </div>
       <div>
          <img src={hero} alt="" />
       </div>
    </div>
  )
}

export default banner

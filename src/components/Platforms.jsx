import { platforms } from '../constants/data'
import LearnMore from './LearnMore'
const Platforms = () => {
  return (
    <div className='mt-12 bg-purple-50 py-12'>
       <h1 className='text-center text-3xl md:text-5xl font-semibold'>One Platform for all Financial Solutions</h1>
       <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-8 p-12'>
          {platforms.map((item,index)=>(
            <div key={index} className='bg-white shadow-md rounded-xl shadow-gray-400 hover:shadow-xl cursor-pointer text-center'>
             <img src={item.img} alt="img" className='w-full h-52 rounded-2xl'/>
            <div className='p-8'>
             <h3 className='text-3xl hover:text-purple-700 mb-4'>{item.heading}</h3>
             <p className='text-md text-gray-500 mb-8'>{item.text}</p>
             <a href="#" className='text-purple-700'>{item.btn}</a>
            </div>
          </div>
          ))}
       </div>
       <LearnMore />
    </div>
  )
}

export default Platforms

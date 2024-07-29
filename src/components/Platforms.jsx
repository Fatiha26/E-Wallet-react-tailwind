import { platforms } from '../constants/data'
const Platforms = () => {
  return (
    <div className='my-8 bg-purple-100 py-12'>
       <h1 className='text-center text-5xl font-semibold'>One Platform for all Financial Solutions</h1>
       <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-12 py-12'>
          {platforms.map((item,index)=>(
            <div key={index}>
             <img src={item.img} alt="img" />
             <h3>{item.heading}</h3>
             <p>{item.text}</p>
             <a href="#">{item.btn}</a>
          </div>
          ))}
       </div>
    </div>
  )
}

export default Platforms

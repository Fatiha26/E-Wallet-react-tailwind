import { platforms } from '../constants/data'
const Platforms = () => {
  return (
    <div>
       <h1 className='text-center text-5xl font-semibold'>One Platform for all Financial Solutions</h1>
       <div>
          {platforms.map((item,index)=>(
            <div key={index}>
             <img src={item.img} alt="" />
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

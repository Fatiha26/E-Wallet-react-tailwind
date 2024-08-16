import { nearest } from "../constants/data"

const Nearest = () => {
  return (
    <>
    <section className="px-16">
       <h1 className='text-center text-3xl md:text-5xl font-semibold'>
        Nearest
        <span className="text-purple-700"> eWallet </span>
         Touchpoints
      </h1>
      <div className="grid grid-cols-2 gap-8 mt-12 ">
        {
            nearest.map((item,index)=>(
              <div key={index} className="text-center rounded-xl shadow-md 
              shadow-slate-400 hover:shadow-slate-600 cursor-pointer w-full">
                 <div className="">
                 <h3 className="mt-4 text-xl font-bold text-purple-700">{item.heading}</h3>
                 <p>{item.text}</p>
                 </div>
                 <img src={item.img} alt="news img" className="w-1/2 m-auto" />
              </div>
            ))
        }
      </div>
    </section>

    </>
  )
}

export default Nearest
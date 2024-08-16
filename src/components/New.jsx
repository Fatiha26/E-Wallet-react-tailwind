import { news } from "../constants/data"

const New = () => {
  return (
    <>
     <section className="p-16">
       <h1 className='text-center text-3xl md:text-5xl font-semibold'>
        What&apos;s New in
        <span className="text-purple-700"> eWallet</span>
      </h1>
      <div className="grid grid-cols-3 gap-8 mt-12 ">
        {
            news.map((item,index)=>(
              <div key={index} className="rounded-xl shadow shadow-slate-400 hover:shadow-slate-600 cursor-pointer mr-2">
                 <img src={item.img} alt="news img" />
                 <div className="px-2">
                 <h3 className="mt-4 text-lg font-bold hover:text-purple-700">{item.heading}</h3>
                 <div className="flex items-center gap-2 mb-4 mt-4 text-slate-500">
                   <p>{item.text}</p>
                   <p>{item.line}</p>
                   <p>{item.read}</p>
                 </div>
                 </div>
              </div>
            ))
        }
      </div>
      <button className='py-3 px-6 rounded text-md border  border-white font-bold shadow-md 
      shadow-gray-500 text-purple-700 hover:text-black mt-8'>
          Learn More
      </button>

     </section>

    </>
  )
}

export default New
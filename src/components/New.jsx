import { news } from "../constants/data"

const New = () => {
  return (
    <>
     <section className="p-16">
       <h1 className='text-center text-3xl md:text-5xl font-semibold'>
        What&apos;s New in
        <span className="text-purple-700"> eWallet</span>
      </h1>
      <div className="grid grid-cols-3 gap-8 mt-12">
        {
            news.map((item,index)=>(
              <div key={index}>
                 <img src={item.img} alt="news img" />
                 <h3>{item.heading}</h3>
                 <div>
                   <p>{item.text}</p>
                   <p>{item.line}</p>
                   <p>{item.read}</p>
                 </div>
              </div>
            ))
        }
      </div>

     </section>

    </>
  )
}

export default New
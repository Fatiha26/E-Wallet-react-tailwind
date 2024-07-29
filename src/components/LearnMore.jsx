import React from 'react'
import { learn } from '../constants/data'

const LearnMore = () => {
  return (
    <>
      <div className='px-10 my-16'>
        <div className='flex items-center gap-4'>
            <div className='w-96 h-[2px] bg-slate-300'></div>
            <h2 className='text-2xl font-bold'>Learn More about e-wallet Services</h2>
            <div className='w-96 h-[2px] bg-slate-300'></div>
        </div>
      <div className='flex items-center gap-12 mt-20 w-full'>
      {learn.map((item,index)=>(
        <div key={index} >
            <div className='flex items-center flex-col'>
               <img src={item.limg} alt="img" className='w-12'/>
               <p className='mt-6 text-lg hover:text-purple-700 cursor-pointer text-center'>{item.ltext}</p>
            </div>
        </div>
       ))}
      </div>
      </div>
      
    </>
  )
}

export default LearnMore

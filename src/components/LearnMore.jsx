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
       {learn.map((item,index)=>(
        <div key={index} className='flex items-center gap-12'>
            <img src={item.limg} alt="img" />
            <p>{item.ltext}</p>
        </div>
       ))}
      </div>
      
    </>
  )
}

export default LearnMore

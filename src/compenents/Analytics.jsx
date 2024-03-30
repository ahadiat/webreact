import React from 'react'
import Satu from '../assets/lap.svg'

function Analytics() {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <img className='w-[500px] mx-auto my-4' src={Satu}  alt="/" />
          <div className='flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold'>DATA ANALYTIC DASHBOARD</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytic Controller</h1>
            <p>To download an image in the PNG format, whether you're programming, browsing the web, or using software tools, involves different approaches depending on the context. Below, I'll cover a few common scenarios.</p>
            <button className='bg-black text-[#47f0bb] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>


          </div>          
        </div>      
    </div>
  )
}

export default Analytics
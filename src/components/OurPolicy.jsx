import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col items-center justify-around gap-10 py-16 text-center text-gray-700 sm:flex-row sm:gap-6'>
      
      {/* Easy Exchange Policy */}
      <div className='flex flex-col items-center transition-transform duration-200 hover:scale-105'>
        <img src={assets.exchange_icon} className='m-auto mb-4 w-14' alt="" />
        <p className='text-base font-semibold sm:text-lg'>Easy Exchange Policy</p>
        <p className='mt-1 text-sm text-gray-500 sm:text-base'>We offer hassle‑free exchange policy</p>
      </div>

      {/* Return Policy */}
      <div className='flex flex-col items-center transition-transform duration-200 hover:scale-105'>
        <img src={assets.quality_icon} className='m-auto mb-4 w-14' alt="" />
        <p className='text-base font-semibold sm:text-lg'>7 Days Return Policy</p>
        <p className='mt-1 text-sm text-gray-500 sm:text-base'>We provide 7 days free return policy</p>
      </div>

      {/* Customer Support */}
      <div className='flex flex-col items-center transition-transform duration-200 hover:scale-105'>
        <img src={assets.support_img} className='m-auto mb-4 w-14' alt="" />
        <p className='text-base font-semibold sm:text-lg'>Best Customer Support</p>
        <p className='mt-1 text-sm text-gray-500 sm:text-base'>We provide 24/7 customer support</p>
      </div>

    </div>
  )
}

export default OurPolicy

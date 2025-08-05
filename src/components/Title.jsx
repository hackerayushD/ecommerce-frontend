import React from 'react'

const Title = ({ text1, text2 }) => {
  return (
    <div className='inline-flex items-center gap-4 mb-2'>
      {/* Text */}
      <p className='text-gray-800 uppercase tracking-[0.25em] text-lg sm:text-xl md:text-2xl font-bold'>
        {text1} <span className='text-gray-900'>{text2}</span>
      </p>
      {/* Line */}
      <p className='w-12 sm:w-16 h-[2px] bg-gray-700'></p>
    </div>
  )
}

export default Title

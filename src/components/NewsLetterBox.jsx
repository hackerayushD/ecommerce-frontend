import React from 'react'

const NewsLetterBox = () => {

  const onSubmitHandler = (event)=>{
    event.preventDefault();
  }
  return (
    <div className='text-center'>
      <p className='text-2xl font-semibold text-gray-800'>
        Subscribe now & get 20% off
      </p>
      <p className='mt-1 text-sm text-gray-500 sm:text-base'>
        Join our mailing list for exclusive offers, style tips, and the latest arrivals — straight to your inbox.
      </p>

      {/* Email form */}
      <form onSubmit={onSubmitHandler} className='flex items-center w-full gap-2 p-1 mx-auto mt-6 bg-white border border-gray-300 rounded-full shadow-sm sm:w-1/2'>
        <input
          className='w-full px-4 py-2 text-sm text-gray-700 bg-transparent rounded-full outline-none'
          type='email'
          placeholder='Enter your email'
          required
        />
        <button
          type='submit'
          className='px-6 py-2 text-sm font-medium text-white transition-all duration-200 bg-black rounded-full hover:bg-gray-800'
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  )
}

export default NewsLetterBox

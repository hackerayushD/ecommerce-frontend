import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem';

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const[latestProducts,setlatestProducts] = useState([]);
    
    useEffect (()=> {
        setlatestProducts(products.slice(0,10));
    },[])


  return (
    <div className='my-14'>
      {/* Title ko center align */}
      <div className='flex flex-col items-center py-6 text-center'>
        <Title text1={'LATEST'} text2={'COLLECTIONS'} />
        <p className='w-3/4 m-auto mt-1 text-xs italic text-gray-600 sm:text-sm md:text-base'>
          Discover our hand‑picked selection of the season’s most sought‑after styles, crafted for elegance and comfort.
        </p>
      </div>
      
      {/* rendering products */}
      <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6'>
        {
            latestProducts.map((item,index)=>(
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
            ))
        }
      </div>
    </div>
  )
}

export default LatestCollection

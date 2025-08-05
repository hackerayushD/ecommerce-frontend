import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const BestProduct = products.filter((item) => item.bestseller);
    setBestSeller(BestProduct.slice(0, 5));
  }, [products]);

  return (
    <div className='my-10'>
      <div className='py-6 text-3xl text-center'>
        <Title text1={'BEST'} text2={'SELLERS'} />
        <p className='w-3/4 m-auto mt-0.5 text-xs text-gray-600 sm:text-sm md:text-base italic'>
          Explore our most‑loved products, chosen by thousands of happy customers for their style and quality.
        </p>
      </div>
      <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6'>
        {
            bestSeller.map((item,index)=>(
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />        
            ))
        }
      </div>
    </div>
  )
}

export default BestSeller

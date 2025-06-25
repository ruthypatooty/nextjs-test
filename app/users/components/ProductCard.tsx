import React from 'react'
import AddToCart from './AddToCart'
import styles from './ProductCard.module.css';


const ProductCard = () => {
  return (
    <div className='p-5 my-5 bg-sky-600 text-white text-xl hover:bg-sky-800'>
        <AddToCart />
    </div>
  )
}

export default ProductCard

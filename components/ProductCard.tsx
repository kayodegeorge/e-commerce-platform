import React from 'react'
import Link from 'next/link'

interface ProductCardProps {
  product: {
    id: number
    name: string
    category: string
    price: number
    description: string
  }
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className='border rounded-lg shadow-lg p-4 bg-white'>
      <h2 className='text-xl font-semibold mb-2'>{product.name}</h2>
      <p className='text-gray-600 mb-2'>Category: {product.category}</p>
      <p className='text-green-600 text-lg font-bold mb-4'>
        ${product.price.toFixed(2)}
      </p>
      <p className='text-gray-700 mb-4'>{product.description}</p>
      <Link href={`/product/${product.id}`}>
        <a className='block text-center py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600'>
          View Details
        </a>
      </Link>
    </div>
  )
}

export default ProductCard

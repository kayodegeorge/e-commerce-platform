import React, { useState } from 'react'

interface ProductFilterProps {
  categories: string[]
  onFilter: (filters: {
    category: string
    minPrice: number
    maxPrice: number
  }) => void
}

const ProductFilter: React.FC<ProductFilterProps> = ({
  categories,
  onFilter,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [minPrice, setMinPrice] = useState<number>(0)
  const [maxPrice, setMaxPrice] = useState<number>(1000)

  const handleFilter = () => {
    onFilter({ category: selectedCategory, minPrice, maxPrice })
  }

  return (
    <div className='p-4 bg-gray-100 rounded-lg shadow-md'>
      <h3 className='text-lg font-semibold mb-4'>Filter Products</h3>

      <div className='mb-4'>
        <label className='block text-sm font-medium text-gray-700 mb-2'>
          Category
        </label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className='w-full p-2 border border-gray-300 rounded'
        >
          <option value=''>All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className='mb-4'>
        <label className='block text-sm font-medium text-gray-700 mb-2'>
          Min Price
        </label>
        <input
          type='number'
          value={minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value))}
          className='w-full p-2 border border-gray-300 rounded'
        />
      </div>

      <div className='mb-4'>
        <label className='block text-sm font-medium text-gray-700 mb-2'>
          Max Price
        </label>
        <input
          type='number'
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className='w-full p-2 border border-gray-300 rounded'
        />
      </div>

      <button
        onClick={handleFilter}
        className='w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600'
      >
        Apply Filters
      </button>
    </div>
  )
}

export default ProductFilter

import React from 'react'

function Navbar() {
  return (
    <div className='flex py-4 px-4 '>
      {/* Left */}
      <div className='flex-1'>
        <h1 className='uppercase'>Vonheilig</h1>
      </div>
      {/* Right */}
      <div>
        <ul className='uppercase flex space-x-4'>
          <li>Object</li>
          <li>Shop</li>
          <li>Cart (0)</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
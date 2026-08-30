import React from 'react'

function Header() {
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl'>Hello <br /> <span className='text-3xl font-semibold'>Bikash 👋</span> </h1>
        <button className='bg-red-600 text-lg font-bold text-white px-5 py-2 rounded-md cursor-pointer'>Logout</button>
    </div>
  )
}

export default Header
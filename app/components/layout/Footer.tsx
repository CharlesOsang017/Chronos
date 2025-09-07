import React from 'react'

const Footer = () => {
  return (
    <div className='mt-50 py-20 max-h-50 w-full bg-blue-500 text-white text-center'>
    <p>&copy; {new Date().getFullYear()} Chronos. All rights reserved.</p>
  </div>
  )
}

export default Footer
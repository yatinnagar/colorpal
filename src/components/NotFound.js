import React from 'react'
import {Link} from 'react-router-dom'
const NotFound = () => {
  return (
    <div className='flex justify-items-center mt-10'>
        <h1>404 | Not Found</h1>
        <h1 className='bg-gray-300 px-2 py-3 rounded-md shadow-sm shadow-slate-400'><Link to="/"> Go Back to Home</Link></h1>
    </div>
  )
}

export default NotFound
import React from 'react'
import {Link} from 'react-router-dom'
const Empty = () => {
  return (
    <div className='flex-1 flex flex-col justify-center items-center'>
        <img className=' h-[70%] selection:bg-none md:h-full mt-[-5rem]' src="https://assets.website-files.com/5bcb5ee81fb2091a2ec550c7/5c18815260ec1ad2acf8d06e_drawkit-nature-man-colour.svg" alt="nothing saved" />
    
    <p className='text-xl text-center mb-8'>Nothing saved</p>
   <Link to='/'>
   <span className=' px-4 py-2 rounded-md text-sm font-medium border shadow focus:outline-none focus:ring transition text-gray-600 bg-gray-50 border-gray-200 hover:bg-gray-100 active:bg-gray-200 focus:ring-gray-300' >
    Browse Palettes
   </span>
   
   </Link>
      


    </div>
  )
}

export default Empty
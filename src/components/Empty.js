import React from 'react'
import {Link} from 'react-router-dom'
const Empty = () => {
  return (
    <div className='flex-1 flex flex-col justify-center items-center'>
        <img className=' h-[60%] selection:bg-none md:h-full mt-[-5rem]' src="https://assets.website-files.com/5bcb5ee81fb2091a2ec550c7/5c18815260ec1ad2acf8d06e_drawkit-nature-man-colour.svg" alt="nothing saved" />
    
    <p className='text-xl text-center mb-8'>Nothing saved</p>
   <Link to='/'>
   <span className='inline-block px-6 py-4 mb-20 ease-in-out duration-200 hover:bg-orange-600  '>
    Browse Palettes
   </span>
   
   </Link>
      


    </div>
  )
}

export default Empty
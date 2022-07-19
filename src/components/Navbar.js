import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
import ColorPalLogo from '../assets/ColorPal.png'
const Navbar = () => {


    // const [selected, setSelected] = useState("");
    // const [expanded, setExpanded] = useState(false);

    // const handleClick=()=>{
    //     const val=!expanded
    //     setExpanded(val);
    // }
    // function expand() {
    //     setExpanded(true);
    // }

    // function close() {
    //     setExpanded(false);
    // }

    // function select(event) {
    //     const value = event.target.textContent;
    //     // call(value);
    //     close();
    //     setSelected(value);
    // }

    // const showSmMenu=()=>{
    //     return <div>

    //     </div>
    // }

  return (
    <div className='fixed top-0 left-0 w-full h-24 flex items-center px-8 bg-gray-100 z-50 text-2xl'>
         <Link   to='/'  className=' text-inherit'>
        <div className='flex items-center text-lg italic text-green-500'>
            {/* <img className='max-w-[200px] scale-150 w-full h-auto  object-cover rounded-md mr-4' src={ColorPalLogo} alt="ColorPal"/> */}
            ColorPal
        </div>
        
        </Link>
        <div className='flex  items-end  '>
           
            <Link   to='/create' >
            <div className='mx-3 px-4 py-2 rounded-md text-sm font-medium border shadow focus:outline-none focus:ring transition text-gray-600 bg-gray-50 border-gray-200 hover:bg-gray-100 active:bg-gray-200 focus:ring-gray-300'>
                Create
            </div>
            </Link>
            <Link   to='/saved' >
            <div className='mx-3 px-4 py-2 rounded-md text-sm font-medium border shadow focus:outline-none focus:ring transition text-gray-600 bg-gray-50 border-gray-200 hover:bg-gray-100 active:bg-gray-200 focus:ring-gray-300'>
                Favourite
            </div>
            </Link>
            <Link   to='/info' >
            <div className='mx-3 px-4 py-2 rounded-md text-sm font-medium border shadow focus:outline-none focus:ring transition text-gray-600 bg-gray-50 border-gray-200 hover:bg-gray-100 active:bg-gray-200 focus:ring-gray-300'>
               About
            </div>
            </Link>
        </div>
    </div>
  )
   
}

export default Navbar
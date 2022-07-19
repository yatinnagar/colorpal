import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import {AiOutlineClose} from 'react-icons/ai'
import { SketchPicker } from 'react-color'
import {useNavigate} from 'react-router-dom'
// import firebase from 'firebase'
// import {getDoc,updateDoc,increment,FieldValue} from '@firebase/firestore'
import db from '../config/firebase'
import {collection,getDocs ,addDoc} from 'firebase/firestore'
const Create = (props) => {

    const navigate=useNavigate();
     const paletteRef=collection(db,'palatte')
    const [colors,setColors]=useState({
        c1:'#969696',
        c2:'#838383',
        c3:'#747474',
        c4:'#686868',
    });

    const [createBtnVisible,setCreateBtnVisible]=useState(false);

    const [loading,setLoading]=useState(false);
    const [picker,setPicker]=useState({visible:false,toggler:null});

    const handleColorChange = ({hex}) =>{
        setColors({...colors,
        [picker.toggler]:hex
        })
        if(colors.c1!=='#969696'&&colors.c2!=='#838383'&&colors.c3!=='#747474'&&colors.c4!=='#686868'){
            setCreateBtnVisible(true);
        }
       

    }

  async function savePalatteToDB(){
    
    try {
        setLoading(true);
        console.log(process.env.REACT_APP_FIREBASE_API_KEY);
    let newPalatte={
        id:uuidv4(),
        colors:{...colors},
        createdAt:new Date().toString()
    }
        await addDoc(paletteRef,{...newPalatte})
        // await db.collection('counter').doc('counter').update({count:firebase.firestore.FieldValue.increment(1)})
        setLoading(false);
        navigate('/');
        
    } catch (error) {
        setLoading(false);
        console.log(error);
        alert("Something went wrong",error)
    }
  }


  return (
    <div className=' min-h-[100vh] py-28 px-8 flex flex-col justify-center items-center relative '>
        {
            loading &&(<div className='flex justify-items-center self-center w-[100vh] h-[100vw]'>
<svg className="-ml-1 mr-3 h-5 w-5 animate-spin text-green-400 text-center" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
            </div>)

        }
        <div style={{flex:"0 0 28rem"}} className='relative flex flex-col w-[24rem] p-3  bg-slate-100 shadow-md shadow-gray-300  rounded-xl cursor-pointer'>
             {
                picker.visible&&
                <>
                <SketchPicker
                className='absolute z-100 top-12 right-0 md:right-[-5rem] lg:right-[-10rem]'
                 color={colors[picker.toggler]}
                 onChange={handleColorChange}

                />
                <span 
                className='absolute z-100 bg-slate-100 rounded-full top-10 right-0 md:right-[-5.5rem] shadow-md lg:right-[-10.2rem] text-2xl'
                onClick={()=>setPicker({visible:false,toggler:null})}

                >
                      <AiOutlineClose/>
                </span>
                </>
             }
             <div className='flex-[3] rounded-t-lg'
              style={{backgroundColor:colors.c1}}
              onClick={()=>setPicker({visible:true,toggler:'c1'})}
             >
             </div>
             <div className='flex-[2]'
              style={{backgroundColor:colors.c2}}
              onClick={()=>setPicker({visible:true,toggler:'c2'})}
             >
             </div>
             <div className='flex-[1.5]'
              style={{backgroundColor:colors.c3}}
              onClick={()=>setPicker({visible:true,toggler:'c3'})}
             >
             </div>
             <div className='flex-[1] rounded-b-md'
              style={{backgroundColor:colors.c4}}
              onClick={()=>setPicker({visible:true,toggler:'c4'})}
             >
             </div>
             {
                createBtnVisible&&
                <span className='absolute py-4 px-6 text-2xl rounded-sm border-1 border-solid ease-in-out duration-100 bottom-[-5rem] left-[35%]'

                >
                    <button onClick={savePalatteToDB} className=' px-4 py-2 rounded-md text-sm font-medium border shadow focus:outline-none focus:ring transition text-gray-600 bg-gray-50 border-gray-200 hover:bg-gray-100 active:bg-gray-200 focus:ring-gray-300'>
                    Create
                    </button>
                </span>
             }
        </div>
    </div>
  )
}

export default Create
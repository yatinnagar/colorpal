import React,{useEffect,useState} from 'react'
import { useParams } from "react-router-dom";
import db from '../config/firebase';
import {motion} from 'framer-motion'
import { CopyToClipboard } from "react-copy-to-clipboard";
import {collection,doc,getDoc } from 'firebase/firestore';
import hexRgbs from 'hex-rgbs';

const PaletteItem = () => {
    const {id}=useParams();
    // const paletteRef=collection(db,'palatte');
    const palRef=doc(db,'palatte',id);
    const [palette,setPalette]=useState();
    const [isCopied, setIsCopied] = useState({
        c1: false,
        c2: false,
        c3: false,
        c4: false,
        link:false
      });
    
    const [isCopiedRGB, setIsCopiedRGB] = useState({
        c1: false,
        c2: false,
        c3: false,
        c4: false,
      });
    
      const handleCopyClick = (name) => {
       
        setIsCopied({ ...isCopied, [name]: true });
        setTimeout(() => {
          setIsCopied({ ...isCopied, [name]: false });
        }, 1000);
      };
      const handleCopyClickRGB = (name) => {
       
        setIsCopiedRGB({ ...isCopiedRGB, [name]: true });
        setTimeout(() => {
          setIsCopiedRGB({ ...isCopiedRGB, [name]: false });
        }, 1000);
      };
    
        
    
    useEffect(() => {
      getDoc(palRef).then((doc)=>{
        // console.log(doc.data().colors);
        setPalette(doc.data().colors)
})
    
    }, [])

    // const {palette.palette.colors.c1,palette.palette.colors.c2,palette.palette.colors.c3,palette.palette.colors.c4}=palette.colors;
    
  return (<>
    
    
    <div className=' min-h-[100vh] py-28 px-8 flex flex-col justify-center items-center relative '>
       {palette&&<div style={{flex:"0 0 30rem"}} className='relative flex flex-col w-[24rem] h-auto p-3 bg-slate-100 shadow-md shadow-gray-300 rounded-xl cursor-pointer'>
            
            <div className='flex-[3] rounded-t-lg'
             style={{backgroundColor:`${palette.c1}`}}
            >
            </div>
            <div className='flex-[2]'
             style={{backgroundColor:`${palette.c2}`}}
            >
            </div>
            <div className='flex-[1.5]'
             style={{backgroundColor:`${palette.c3}`}}
            >
            </div>
            <div className='flex-[1] rounded-b-md'
             style={{backgroundColor:`${palette.c4}`}}

            >
            </div>
       </div>}
       {
        palette&& <>
        <div className='flex w-[30rem] mt-5'>  
                <div style={{backgroundColor:`${palette.c1}`}} className='w-[30px] h-[30px] rounded-full mx-auto my-0'>
                </div>
                <div style={{backgroundColor:`${palette.c2}`}} className='w-[30px] h-[30px] rounded-full mx-auto my-0'>
                </div>
                <div style={{backgroundColor:`${palette.c3}`}} className='w-[30px] h-[30px] rounded-full mx-auto my-0'>
                </div>
                <div style={{backgroundColor:`${palette.c4}`}} className='w-[30px] h-[30px] rounded-full mx-auto my-0'>
                </div>
         </div>
         <hr/>
        <div className='flex w-[30rem] mt-5'>  
                
                <div className='mx-auto my-0 px-1 bg-slate-100 cursor-pointer hover:bg-slate-300 rounded-md'>
                <CopyToClipboard text={palette.c1}>
                  <div onClick={()=>handleCopyClick('c1')} >
                      {!isCopied.c1?palette.c1:`Copied!`}
                   </div>
                </CopyToClipboard>

                </div>
                <div className='mx-auto my-0 px-1 bg-slate-100 cursor-pointer hover:bg-slate-300 rounded-md'>

                <CopyToClipboard text={palette.c2}>
                  <div onClick={()=>handleCopyClick('c2')} >
                      {!isCopied.c2?palette.c2:`Copied!`}
                   </div>
                </CopyToClipboard>
                </div>
                <div className='mx-auto my-0 px-1 bg-slate-100 cursor-pointer hover:bg-slate-300 rounded-md'>

                <CopyToClipboard text={palette.c3}>
                  <div onClick={()=>handleCopyClick('c3')} >
                      {!isCopied.c3?palette.c3:`Copied!`}
                   </div>
                </CopyToClipboard>
                </div>
                <div className='mx-auto my-0 px-1 bg-slate-100 cursor-pointer hover:bg-slate-300 rounded-md'>
                <CopyToClipboard text={palette.c4}>
                  <div onClick={()=>handleCopyClick('c4')}>
                      {!isCopied.c4?palette.c4:`Copied!`}
                   </div>
                </CopyToClipboard>

                </div>
         </div>
         <div className='flex w-[35rem] mt-5'>  
                
                <div className='mx-auto my-0 px-1 bg-slate-100 cursor-pointer hover:bg-slate-300 rounded-md'>
                <CopyToClipboard text={hexRgbs(palette.c1)}>
                  <div onClick={()=>handleCopyClickRGB('c1')} >
                      {!isCopiedRGB.c1?hexRgbs(palette.c1):`Copied!`}
                   </div>
                </CopyToClipboard>

                </div>
                <div className='mx-auto my-0 px-1 bg-slate-100 cursor-pointer hover:bg-slate-300 rounded-md'>

                <CopyToClipboard text={hexRgbs(palette.c2)}>
                  <div onClick={()=>handleCopyClickRGB('c2')} >
                      {!isCopiedRGB.c2?hexRgbs(palette.c2):`Copied!`}
                   </div>
                </CopyToClipboard>
                </div>
                <div className='mx-auto my-0 px-1 bg-slate-100 cursor-pointer hover:bg-slate-300 rounded-md'>

                <CopyToClipboard text={hexRgbs(palette.c3)}>
                  <div onClick={()=>handleCopyClickRGB('c3')} >
                      {!isCopiedRGB.c3?hexRgbs(palette.c3):`Copied!`}
                   </div>
                </CopyToClipboard>
                </div>
                <div className='mx-auto my-0 px-1 bg-slate-100 cursor-pointer hover:bg-slate-300 rounded-md'>
                <CopyToClipboard text={hexRgbs(palette.c4)}>
                  <div onClick={()=>handleCopyClickRGB('c4')}>
                      {!isCopiedRGB.c4?hexRgbs(palette.c4):`Copied!`}
                   </div>
                </CopyToClipboard>

                </div>
         </div>
         <div className='mt-5 mx-auto'> 
         <CopyToClipboard text={window.location.href}>
          <button onClick={()=>handleCopyClick("link")} className=' px-4 py-2 rounded-md text-sm font-medium border shadow focus:outline-none focus:ring transition text-gray-600 bg-gray-50 border-gray-200 hover:bg-gray-100 active:bg-gray-200 focus:ring-gray-300'>
            {!isCopied.link?"Link":"Copied!"}
          </button>
          </CopyToClipboard>
         </div>
         </>
       }

       </div>
        </>
  )
}

export default PaletteItem
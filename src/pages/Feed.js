import React,{useEffect,useState} from 'react'
import db from '../config/firebase';
import Palette from '../components/Palette';
import {collection,getDocs } from 'firebase/firestore'


const Feed = (props) => {

    const paletteRef=collection(db,'palatte')
    const [palette,setPalette]=useState([]);
    const [loading,setLoading]=useState("");

    const getPalettes=async()=>{
        const data = await getDocs(paletteRef);
        setPalette(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    useEffect(() => {
        getPalettes();
    },[])

  return (
  
    <div className='grid w-[85%] mx-auto items-center justify-center my-20 py-10 grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
        {
            loading&&<p>loading...</p>
        }
        {
            palette.map((p)=>{
                return <Palette key={p.id} palette={p} />
            })
        }

    </div>
   
  )
}

export default Feed
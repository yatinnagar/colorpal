import React,{useEffect,useState} from 'react'
import { getFromStorage,removeFromStorage } from '../helpers'

import Palette from '../components/Palette'
import Empty from '../components/Empty'

const Saved = () => {

    const [palettes, setPalettes] = useState([])

    const handleDeletePalette=(id)=>{
       
        setPalettes(palettes.filter(palette=>palette.id!==id))
       removeFromStorage(id);
       
    }
    useEffect(()=>{
        let saved=getFromStorage();
         setPalettes(saved);
    },[])

  return (
    <div className='grid min-h-screen justify-center my-20 py-10 grid-cols-2 lg:grid-cols-3'>
    {
        palettes.length?
        palettes.map((palette)=>{
            return <Palette 
                   key={palette.id}
                   palette={palette}
                   deletePalette={handleDeletePalette} 
            />
        })
        :<Empty/>
    }

    </div>
  )
}

export default Saved
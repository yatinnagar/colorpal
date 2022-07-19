export const addToStorage=(e,palette)=>{

    e.target.innerHTML='Saved'
    if(localStorage.getItem(`pal-${palette.id}`))return ;

    localStorage.setItem(`pal-${palette.id}`,JSON.stringify({...palette,fromLocal:true}))
}

export const removeFromStorage=(id)=>{
    localStorage.removeItem(`pal-${id}`)
}

export const getFromStorage=()=>{
    let saved=[];
    for(let i=0;i<localStorage.length;i++){
        if(localStorage.key(i).substring(0,4)==='pal-')
        {
            let item=localStorage.getItem(localStorage.key(i));
            item=JSON.parse(item);
            saved=[...saved,item];
        }
    }
    return saved;
}


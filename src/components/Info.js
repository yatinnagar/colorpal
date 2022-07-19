import React from 'react'

const Info = () => {
  return (
    <div className=' min-h-[100vh] py-28 px-8 flex flex-col justify-center items-center relative '>
     <div className="rounded-3xl overflow-hidden shadow-xl max-w-xs my-3 bg-green-400">
     <a href='https://github.com/yatinnagar' target="_blank">
  <img src="https://i.postimg.cc/9FDDCDbh/github-PNG15.png" className="w-full" />
 </a>
  <div className="flex justify-center -mt-8">
    <a href='https://github.com/yatinnagar' target="_blank">
    <img
      src="https://i.postimg.cc/XNHWjx1Z/blank-profile-picture-g34b052d00-640.png"
      className=" cursor-pointer rounded-full w-[60px] border-solid border-white border-2 -mt-3"
    />
    </a>
   
  </div>
  <div className="text-center px-3 pb-6 pt-2">
    <h3 className="text-white text-sm bold font-sans">Yatindra Nagar</h3>
    <p className="mt-2 font-sans font-light text-white">
    I am Final Year Student at PDPM IIITDM JABALPUR , 
    Pursuing B.Tech in Mechanical Engineering. 
    I have interest in Software Development, Web Development
    </p>
  </div>
  <div className="flex justify-center pb-3 text-white">
    <div className="text-center mr-3 border-r pr-3">
      <h2>1</h2>
      <span>Follower</span>
    </div>
    <div className="text-center">
      <h2>1</h2>
      <span>Following</span>
    </div>
  </div>
</div>

    </div>
  )
}

export default Info
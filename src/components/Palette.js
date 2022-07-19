import React, { useState } from "react";
import {Link,useNavigate} from 'react-router-dom'
import moment from "moment";
import { motion } from "framer-motion";
import { addToStorage } from "../helpers";
import {MdOutlineOpenInNew} from 'react-icons/md'

import { CopyToClipboard } from "react-copy-to-clipboard";

const Palette = (props) => {
  const navigate=useNavigate();
  const [isCopied, setIsCopied] = useState({
    c1: false,
    c2: false,
    c3: false,
    c4: false,
  });
  let { deletePalette } = props;

  const { id, colors, createdAt, fromLocal } = props.palette;

  let { c1, c2, c3, c4 } = colors;

  const handleCopyClick = (name) => {
    setIsCopied({ ...isCopied, [name]: true });
    setTimeout(() => {
      setIsCopied({ ...isCopied, [name]: false });
    }, 1000);
  };

  return (
    <motion.div
      
      className="flex max-w-[18rem] h-80 md:h-96 flex-col m-4 p-2 md:m-4 md:p-4 bg-slate-100 rounded-xl ease-in-out duration-1000"
    >
      <div className="flex-1 flex flex-col mb-6">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ backgroundColor: c1 }}
          className={`flex-[3] relative cursor-pointer group ease-in rounded-t-md duration-1500 `}
          
        >
          <CopyToClipboard text={c1}>
            <span
              className="absolute  z-10 rounded-t-md opacity-0 bottom-0 text-md bg-gray-800 text-white ease-in-out py-1 px-2 group-hover:opacity-100 selection:bg-none"
              onClick={() => handleCopyClick("c1")}
            >
              {!isCopied.c1 ? c1 : "Copied!"}
            </span>
          </CopyToClipboard>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ backgroundColor: c2 }}
          className={`flex-[2] relative  cursor-pointer group ease-in duration-1500`}
        >
          <CopyToClipboard text={c2}>
            <span
              className="absolute rounded-t-md opacity-0 bottom-0 text-md bg-gray-800 text-white ease-in-out py-1 px-2 group-hover:opacity-100 selection:bg-none"
              onClick={() => handleCopyClick("c2")}
            >
              {!isCopied.c2 ? c2 : "Copied!"}
            </span>
          </CopyToClipboard>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ backgroundColor: c3 }}
          className={`flex-[1.5] relative cursor-pointer group ease-in duration-1500`}
        >
          <CopyToClipboard text={c3}>
            <span
              className="absolute rounded-t-md opacity-0 bottom-0 text-md bg-gray-800 text-white ease-in-out py-1 px-2 group-hover:opacity-100 selection:bg-none"
              onClick={() => handleCopyClick("c3")}
            >
              {!isCopied.c3 ? c3 : "Copied!"}
            </span>
          </CopyToClipboard>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ backgroundColor: c4 }}
          className={`flex-[1] relative rounded-b-md cursor-pointer group ease-in duration-1500`}
        >
          <CopyToClipboard text={c4}>
            <span
              className="absolute rounded-t-md opacity-0 bottom-0 text-md bg-gray-800 text-white ease-in-out py-1 px-2 group-hover:opacity-100 selection:bg-none"
              onClick={() => handleCopyClick("c4")}
            >
              {!isCopied.c4 ? c4 : "Copied!"}
            </span>
          </CopyToClipboard>
        </motion.div>
      </div>

      <div className="flex items-center justify-between">
        {fromLocal ? (
          <div
            onClick={() => deletePalette(id)}
            className="px-2 cursor-pointer py-1 lg:px-4 lg:py-2 rounded-md  text-xs lg:text-sm lg:font-medium border shadow focus:outline-none focus:ring transition text-gray-600 bg-gray-50 border-gray-200 hover:bg-gray-100 active:bg-gray-200 focus:ring-gray-300 ease-in-out duration-100  selection:bg-none "
          >
            Unsave
          </div>
        ) : (
          <div
            onClick={(e) => addToStorage(e, props.palette)}
            className=" px-4 py-2 cursor-pointer rounded-md text-sm font-medium border shadow focus:outline-none focus:ring transition text-gray-600 bg-gray-50 border-gray-200 hover:bg-gray-100 active:bg-gray-200 focus:ring-gray-300 ease-in-out duration-100  selection:bg-none "
          >
            {localStorage.getItem(`pal-${id}`) ? "Saved" : "Save"}
          </div>
        )}
         <div onClick={()=>navigate(`/palette/${id}`)} className="cursor-pointer text-gray-600 bg-gray-50 border-gray-200 hover:bg-gray-100 active:bg-gray-200 focus:ring-gray-300 ease-in-out duration-100">
          <MdOutlineOpenInNew/>
         </div>
        <div className="text-gray-400 text-sm">
          {/* {moment(createdAt).fromNow()} */}
          {moment(createdAt).fromNow()}
        </div>
      </div>
    </motion.div>
  );
};

export default Palette;

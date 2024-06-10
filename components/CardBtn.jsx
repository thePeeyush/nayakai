'use client'
import React from 'react'

const CardBtn = ({ children, title, color, bgColor, onClick, postID }) => {
    return <button className={`flex justify-center items-center gap-1 m-2 rounded-full p-2 w-full ${color} ${bgColor} hover:bg-opacity-10`} onClick={()=>onClick(postID)} >
      <div className="text-xl">
        {children}
      </div>
      <h1 className="text-[12px]">{title}</h1>
    </button>
  }

export default CardBtn
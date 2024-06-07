'use client'
import React from 'react'

const VedioPlayer = ({url}) => {
  return (
    <video className='w-full' autoPlay controls muted src={url}/>
  )
}

export default VedioPlayer
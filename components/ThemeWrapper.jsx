'use client'

import React from 'react'
import { useOurStore } from '../store/states'

const ThemeWrapper = ({children}) => {
    const theme = useOurStore((state)=>state.theme);
  return (
   <div data-theme={theme}>
       {children}
   </div>
  )
}

export default ThemeWrapper
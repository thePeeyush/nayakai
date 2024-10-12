'use client'

import { useOurStore } from '../store/states'

const ThemeWrapper = ({ children }) => {
  const {theme} = useOurStore((state) => state);
  
  return (
    <div data-theme={theme}>
      {children}
    </div>
  )
}

export default ThemeWrapper
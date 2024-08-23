'use client'

import React from 'react'
import { useOurStore } from '../store/states'
import { useEffect } from 'react';

const ThemeWrapper = ({ children }) => {
  const {theme,changeTheme} = useOurStore((state) => state);
  useEffect(() => {
    let theme = localStorage.getItem('theme');
    if (!theme) {
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      theme = prefersDarkMode ? 'dark' : 'light';
    }
    changeTheme(theme);
  }, [theme]);

  return (
    <div data-theme={theme}>
      {children}
    </div>
  )
}

export default ThemeWrapper
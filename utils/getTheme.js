'use client'
export default function getTheme() {
    const theme = localStorage.getItem('theme')
    if(!theme) {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'black' : 'light'
    }
    return theme
}
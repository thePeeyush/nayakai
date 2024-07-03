'use client'
import { usePathname } from 'next/navigation'
import React from 'react'

const GroupTabs = ({ children }) => {
    const pathname = usePathname();
    if (pathname === '/auth') return;
    return (
        <>{children}</>
    )
}

export default GroupTabs
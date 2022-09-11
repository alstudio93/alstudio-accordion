import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes';
import { HiOutlineSun } from 'react-icons/hi'
import { MdOutlineDarkMode } from 'react-icons/md'
const ThemeSwitcher = () => {
    
    return (
        <button className='theme-switcher'>
            Toggle Dark Mode
        </button>
    )
}
export default ThemeSwitcher
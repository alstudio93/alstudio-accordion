import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes';
import { HiOutlineSun } from 'react-icons/hi'
import { MdOutlineDarkMode } from 'react-icons/md'
const ThemeSwitcher = () => {
    
    return (
        <button
            type="button"
            className="flex items-center justify-center w-10 h-10 mx-auto transition-all bg-gray-200 rounded-lg md:w-12 md:h-12 dark:bg-gray-600 hover:ring-2 ring-gray-300 "
        >
            {/* Function to render icons goes here */}
        </button>
    )
}
export default ThemeSwitcher

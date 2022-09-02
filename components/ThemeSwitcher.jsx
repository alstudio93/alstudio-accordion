import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes';
import { HiOutlineSun } from 'react-icons/hi'
import { MdOutlineDarkMode } from 'react-icons/md'
const ThemeSwitcher = () => {
    const { resolvedTheme, setTheme } = useTheme()
    const [onComponentMount, setOnComponentMount] = useState(false);

    // After mounting, we have access to the theme
    useEffect(() => setOnComponentMount(true), []);
    const themeIcon = () => {
        if (onComponentMount && resolvedTheme === "dark") {
            return <HiOutlineSun className='light-mode-btn lg:text-2xl' title="Dark Mode"  />
        } else {
            return <MdOutlineDarkMode className='dark-mode-btn lg:text-2xl' title="Light Mode"  />
        }
    }
    return (
        <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="flex items-center justify-center w-8 h-8 mx-auto transition-all bg-gray-200 rounded-lg md:w-12 md:h-12 dark:bg-gray-600 hover:ring-2 ring-gray-300 "
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        >
            {themeIcon()}
        </button>
    )
}
export default ThemeSwitcher
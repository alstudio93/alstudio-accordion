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
            return <HiOutlineSun className='text-xl md:text-2xl' />
        } else if(onComponentMount && resolvedTheme === "light") {
            return <MdOutlineDarkMode className='text-xl md:text-2xl'  />
        }
    }
    return (
        <button
            aria-label={resolvedTheme === "light" ? "Click to switch to Dark Mode" : "Click to switch to Light Mode"}
            type="button"
            className="flex items-center justify-center w-10 h-10 mx-auto transition-all bg-gray-200 rounded-lg md:w-12 md:h-12 dark:bg-gray-600 hover:ring-2 ring-gray-300 "
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        >
            {themeIcon()}
        </button>
    )
}
export default ThemeSwitcher

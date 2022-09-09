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
            return <HiOutlineSun className='light-mode-btn'/>
        } else {
            return <MdOutlineDarkMode className='dark-mode-btn'/>
        }
    }
    return (
        <button
            aria-label={resolvedTheme === "light" ? "Press enter to switch to Dark Mode" : "Press enter to switch to Light Mode"}
            type="button"
            className="theme-switcher "
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        >
            {themeIcon()}
        </button>
    )
}
export default ThemeSwitcher
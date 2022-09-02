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
            return <HiOutlineSun className='light-mode-btn' title="Toggle Light Mode"  />
        } else {
            return <MdOutlineDarkMode className='dark-mode-btn' title=" Toggle Dark Mode"  />
        }
    }
    return (
        <button
            type="button"
            className="theme-switcher "
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        >
            {themeIcon()}
        </button>
    )
}
export default ThemeSwitcher
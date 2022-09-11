import { useTheme } from 'next-themes';
import {HiOutlineSun} from 'react-icons/hi';
import {MdOutlineDarkMode} from 'react-icons/md';
import React, { useEffect, useState } from 'react'

const ThemeSwitcher = () => {
    const {resolvedTheme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

    const themeIcon = () => {
        if(resolvedTheme === "dark") {
            return <HiOutlineSun className='text-xl lg:text-2xl'/>
        } else {
            return <MdOutlineDarkMode className='text-xl lg:text-2xl'/>
        }
    }

  return (
    <button
    aria-label={resolvedTheme === "light" ? "Press enter to switch to Dark Mode" : "Press enter to switch to Light Mode"}
    type="button"
    className="flex items-center justify-center w-10 h-10 mx-auto transition-all bg-gray-200 rounded-lg md:w-12 md:h-12 dark:bg-gray-600 hover:ring-2 ring-gray-300 "
    onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
>
    {themeIcon()}
</button>
  )
}

export default ThemeSwitcher


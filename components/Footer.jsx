import React from 'react'

const Footer = () => {
    return (
        <footer className='flex justify-center py-10 '>
            {/* <!-- Copyright --> */}
            <span className="text-xs font-nunito md:text-sm lg:text-base"
            > Designed and Developed By &copy; {new Date().getFullYear()} ALStudio
            </span>
        </footer>
    )
}

export default Footer
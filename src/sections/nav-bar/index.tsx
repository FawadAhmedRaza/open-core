import Image from 'next/image'
import React from 'react'

const NavBar = () => {
    return (
        <div className="  sticky top-0 z-50 flex items-end justify-center w-full bg-union bg-no-repeat bg-cover h-28 md:h-36 bg-white ">
            <div className=' flex items-center justify-center border border-gray-4 rounded-full h-16 md:h-20 bg-white px-3 md:px-4'>
                <Image src="/assets/svg/icon.svg" alt='icon' width={35} height={35} className=' mx-4 md:mx-3 cursor-pointer w-7 h-7 md:w-9 md:h-9' />
                <span className='border-r border-gray-4 w-1 h-full'></span>
                <Image src="/assets/svg/menu.svg" alt='menu' width={37} height={37} className='mx-4 md:mx-3 cursor-pointer w-7 h-7 md:w-10 md:h-10' />
            </div>
           
        </div>
    )
}

export default NavBar
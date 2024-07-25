import { cn } from '@/libs/utils/cn'
import React from 'react'
import Iconify from '../iconify'
import Image from 'next/image'

type InputProps = {
    className?: string,
    icon?: boolean,
    palceholder?: string,
    type: string,
}
const Input: React.FC<InputProps> = ({ className, icon, palceholder, type }) => {
    return (
        <div className={cn(' flex items-center gap-2 w-full border-2 border-gray-3 rounded-lg sm:rounded-2xl px-2.5 sm:px-5 py-3 sm:py-3.5 md:py-4 bg-white', className)}>
            {icon ? (<Image src="/assets/svg/search.svg" alt='search' width={12} height={12} className='w-auto h-auto' />) : null}
            <input type={type} placeholder={palceholder} className='w-full grow placeholder:text-gray-6 text-custom_black outline-none bg-transparent'/>
        </div>
    )
}

export default Input
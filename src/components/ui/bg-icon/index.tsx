import { cn } from '@/libs/utils/cn'
import Link from 'next/link'
import React from 'react'
import Iconify from '../iconify'

type BgIconProps = {
    icon: string,
    className?: string,
    href: string
}
const BgIcon: React.FC<BgIconProps> = ({ className, icon, href }) => {
    return (
        <Link href={href} target='_blank' className={cn(' flex justify-center items-center w-10 h-10 bg-sky rounded-lg sm:rounded', className)}>
            <Iconify iconName={icon} className='w-6 h-6' />
        </Link>
    )
}

export default BgIcon
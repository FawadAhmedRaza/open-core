import { cn } from '@/libs/utils/cn'
import React from 'react'

type DivProps = {
    children: React.ReactNode,
    className?: string
}

const Div: React.FC<DivProps> = ({ children, className }) => {
    return (
        <div className={cn(' px-4 sm:px-10 md:px-16 lg:px-20 py-8 md:py-16', className)}>
            {children}
        </div>
    )
}

export default Div
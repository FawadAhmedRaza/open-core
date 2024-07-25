import React from 'react';
import { cn } from '@/libs/utils/cn';
import Iconify from '../iconify';

type PillProps = {
    children: React.ReactNode;
    className?: string;
    icon?: string;
};

const Pill: React.FC<PillProps> = ({ children, className, icon }) => {
    return (
        <span className={cn(
            `flex items-center gap-1 w-fit px-2 py-1 text-Secondary font-medium bg-quaternary text-secondary`,
            icon ? 'rounded-lg' : 'rounded-full py-1.5 !px-3 md:bg-gray-2',
            className
        )}>
            {icon && <Iconify iconName={icon} className='text-secondary' />}
            {children}
        </span>
    );
};

export default Pill;

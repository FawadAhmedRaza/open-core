import { cn } from '@/libs/utils/cn';
import React from 'react';
import Iconify from '../../iconify';

type SecondaryButtonProps = {
    children: React.ReactNode;
    className?: string;
    icon?: string;
    onClick?: any;
};

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ children, className, icon, onClick }) => {
    return (
        <button onClick={onClick} className={cn(' flex items-center gap-2 sm:gap-4 bg-white px-4 py-2.5 rounded-lg text-Secondary font-medium border border-gray-3 text-secondary', className)}>
            {icon ? (<Iconify iconName={icon} />) : null}
            {children}
        </button>
    )
};

export default SecondaryButton;

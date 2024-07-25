import { cn } from '@/libs/utils/cn';
import React from 'react';
import Iconify from '../../iconify';

type PrimaryButtonProps = {
    children: React.ReactNode;
    className?: string;
    icon?: string;
    onClick?: any,
    iconClass?: string
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, className, icon, onClick, iconClass }) => {
    return (
        <button onClick={onClick} className={cn(' flex items-center gap-2 sm:gap-4 justify-between bg-gray-1 px-4 py-2.5 rounded-lg text-primary font-medium', className)}>
            {children}
            {icon ? (<Iconify iconName={icon} className={iconClass} />) : null}
        </button>
    );
};

export default PrimaryButton;

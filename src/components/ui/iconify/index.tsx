import React from 'react';
import { Icon } from '@iconify/react';
import { cn } from '@/libs/utils/cn';

type IconifyProps = {
    iconName: string;
    className?: string;
};

const Iconify: React.FC<IconifyProps> = ({ iconName, className }) => {
    return (
        <Icon icon={iconName} className={cn(' w-4 h-4 text-primary', className)} />
    );
};

export default Iconify;

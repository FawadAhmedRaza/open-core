import React from 'react';
import { cn } from '@/libs/utils/cn';

type H2Props = {
    children: React.ReactNode;
    className?: string
};

const H2: React.FC<H2Props> = ({ children, className }) => {
    return <h2 className={cn(' text-base sm:text-lg md:text-xl lg:text-2xl leading-6 sm:leading-7 md:leading-8 lg:leading-9 text-secondary', className)}>{children}</h2>;
};

export default H2;

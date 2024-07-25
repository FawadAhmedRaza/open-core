import React from 'react';
import { cn } from '@/libs/utils/cn';

type H3Props = {
    children: React.ReactNode;
    className?: string
};

const H3: React.FC<H3Props> = ({ children, className }) => {
    return <h3 className={cn(' text-base sm:text-lg md:text-xl text-white leading-5  md:leading-6 font-normal', className)}>{children}</h3>;
};

export default H3

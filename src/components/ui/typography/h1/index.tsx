import React from 'react';
import { cn } from '@/libs/utils/cn';

type H1Props = {
    children: React.ReactNode;
    className?: string;
};

const H1: React.FC<H1Props> = ({ children, className }) => {
    return <h1 className={cn(' text-4xl sm:text-5xl md:text-6xl lg:text-64fs text-custom_black md:text-primary font-semibold leading-10 sm:leading-50lh md:leading-76lh', className)}>{children}</h1>;
};

export default H1;

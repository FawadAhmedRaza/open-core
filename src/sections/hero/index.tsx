import Div from '@/components/ui/div'
import H1 from '@/components/ui/typography/h1'
import H2 from '@/components/ui/typography/h2'
import React from 'react'

const Hero = () => {
    return (
        <Div className='flex flex-col items-center justify-center gap-4 w-full lg:w-900wd mx-auto h-full pt-28 xl:pt-32 xl:pb-40  '>
            <H1 className='text-center'>Your Ultimate Resource Hub for Digital Success</H1>
            <H2 className='text-center'>Explore our comprehensive library of tools and templates for developers, designers, marketers, and branding experts.</H2>
        </Div>
    )
}

export default Hero
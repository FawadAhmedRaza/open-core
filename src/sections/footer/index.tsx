import React from 'react'
import Div from '@/components/ui/div'
import H3 from '@/components/ui/typography/h3'
import BgIcon from '@/components/ui/bg-icon'
import Iconify from '@/components/ui/iconify'
import { FOOTER_ICONS } from '@/_mock/_footer'

const Footer = () => {
    return (
        <Div className='bg-primary'>
            <div className="flex flex-col gap-16 sm:gap-28 md:gap-40 w-full justify-center items-center bg-white rounded-3xl pt-6 sm:pt-8 md:pt-16">
                {/* TOP  */}
                <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start divide-y md:divide-y-0 divide-gray-3 w-full  px-4 xl:px-20">
                    {/* LEFT */}
                    <div className="flex flex-col justify-between md:h-56 w-full mb-5 md:mb-0">
                        <div className="flex flex-col gap-8 w-full">
                            <div className="flex flex-col justify-center items-center md:justify-start md:items-start gap-2 md:gap-1 w-full">
                                <H3 className='text-custom_black_3 text-center md:text-start font-semibold'>Say Hello!</H3>
                                <H3 className='text-gray-5 hidden md:block'>opencoregroup@gmail.com</H3>
                                <div className=' w-full sm:w-fit flex items-center justify-center gap-2 md:hidden border border-gray-3 rounded-lg px-2  min-400:px-4 sm:px-6 py-1'>
                                    <H3 className='text-gray-5 '>opencoregroup@gmail.com</H3>
                                    <Iconify iconName='humbleicons:external-link' className='text-gray-5 w-5 h-5  ' />
                                </div>
                            </div>
                            <div className="flex items-center justify-between sm:justify-center md:justify-start sm:gap-8 w-full">
                                {
                                    FOOTER_ICONS?.map((item) => (
                                        <BgIcon key={item?.id} href={item?.link} icon={item?.icon} />
                                    ))
                                }
                            </div>
                        </div>
                        <H3 className=' text-gray-5 hidden md:block'>Toronto, ON Canada</H3>
                    </div>
                    {/* RIGHT */}
                    <div className="flex flex-col justify-between  md:h-56 w-full ">
                        <div className="flex items-start md:items-start justify-between sm:justify-center md:justify-between sm:gap-8 w-full mt-5 md:mt-0">
                            <span className='flex flex-col gap-3'>
                                <H3 className='text-gray-5 cursor-pointer'>Home</H3>
                                <H3 className=' text-gray-5 cursor-pointer'>About us</H3>
                                <H3 className=' text-gray-5 cursor-pointer'>Work</H3>
                            </span>
                            <span className='flex flex-col gap-3'>
                                <H3 className=' text-gray-5 cursor-pointer'>Services</H3>
                                <H3 className=' text-gray-5 cursor-pointer'>Contact us</H3>
                            </span>
                        </div>
                        <H3 className=' text-gray-5 text-end hidden md:block'>OpenCore. All Rights Reserved</H3>
                    </div>
                    {/* BOTTOM */}
                    <div className="flex flex-col gap-1 justify-center items-center md:hidden pt-5 mt-5 w-full">
                        <H3 className=' text-gray-5 '>Toronto, ON Canada</H3>
                        <H3 className=' text-gray-5 '>OpenCore. All Rights Reserved</H3>
                    </div>
                </div>

                {/* BOTTOM  */}
                <img src="/assets/svg/logo.svg" alt="img" className="  -mb-2.5  min-400:-mb-3 min-430:-mb-4 sm:-mb-6 md:-mb-8" />
            </div>
        </Div>
    )
}

export default Footer
'use client'
import React, { useState } from 'react'
import Input from '../ui/input'
import SecondaryButton from '../ui/button/secondary-button'
import { FILTERS_TABS } from '@/_mock/_filters'
import PrimaryButton from '../ui/button/primary-button'
import Select from '../select'


const SearchBar = () => {
    const [isSelected, setIsSelected] = useState('1')

    const handleSected = (id: string) => {
        setIsSelected(id)
    }

    return (
        <div className='flex flex-col gap-8 '>
            <Input type='text' icon={true} palceholder='Search for resources and tutorials' />
            <div className=" flex justify-between items-center ">
                <div className=" hidden lg:flex items-center gap-4 grow">
                    {
                        FILTERS_TABS?.map((item) => (
                            item?.id == isSelected ?
                                (
                                    <PrimaryButton onClick={() => handleSected(item?.id)}>{item?.label}</PrimaryButton>
                                )
                                : (

                                    <SecondaryButton onClick={() => handleSected(item?.id)}>{item?.label}</SecondaryButton>
                                )
                        ))
                    }
                </div>
                <div className="w-full grow block lg:hidden">
                    <Select />
                </div>
                <SecondaryButton icon='solar:filter-linear'>Filters</SecondaryButton>
            </div>
        </div>
    )
}

export default SearchBar
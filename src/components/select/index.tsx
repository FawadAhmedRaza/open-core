'use client'
import React, { useEffect, useRef, useState } from 'react'
import PrimaryButton from '../ui/button/primary-button'
import { FILTERS_TABS } from '@/_mock/_filters'

type SelectedItem = {
    id: string
    label: string
}

const Select = () => {
    // STATES AND VARIABLES 
    const [selected, setSelected] = useState<SelectedItem>({
        id: '1',
        label: 'All Resources'
    })
    const [isOpen, setIsOpen] = useState(false)
    const selectRef = useRef<HTMLDivElement>(null)

    // FUNCTIONS 
    const handleSelected = (data: SelectedItem) => {
        setSelected({
            id: data.id,
            label: data.label
        })
        setIsOpen(false)
    }

    useEffect(() => {
        const handleOutsideClick = (e: any) => {
            if (selectRef?.current && !selectRef.current.contains(e.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleOutsideClick)
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick)
        };
    }, [isOpen]);

    
    return (
        <div ref={selectRef} className='relative flex flex-col gap-2 w-170wd grow'>
            <PrimaryButton className='!text-center' icon='ep:arrow-down' iconClass={`${isOpen ? '-rotate-180' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                {selected.label}
            </PrimaryButton>
            {isOpen && (
                <div className="absolute top-12 z-40 shadow-lg overflow-hidden w-full bg-white border border-gray-300 rounded-lg divide-y divide-gray-300">
                    {FILTERS_TABS.map((item) => (
                        <p
                            key={item.id}
                            className={`text-base text-custom_black w-full hover:text-primary hover:bg-sky p-3 cursor-pointer ${selected.id === item.id ? 'text-primary bg-sky' : ''}`}
                            onClick={() => handleSelected(item)}
                        >
                            {item.label}
                        </p>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Select

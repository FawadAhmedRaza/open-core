import React from 'react';
import Pill from '../ui/pill';
import H2 from '../ui/typography/h2';

interface Tag {
    name: string;
    icon?: string;
}

interface Resource {
    id: string;
    src: string;
    title: string;
    tags: Tag[];
}

type CardProps = {
    data: Resource;
    className?: string
};


const Card: React.FC<CardProps> = ({ data, className }) => {
    return (
        <div key={data.id} className={`flex flex-col justify-between h-420px ${className}`}>
            <div className="flex flex-col gap-3">
                <img src={data?.src} alt='img' className='w-auto h-auto rounded-18bd border border-quaternary' />
                <H2 className='text-custom_black_2 font-medium'>{data?.title}</H2>
            </div>
            <div className="flex items-center gap-2">
                {data.tags.map((tag, index) => (
                    <Pill key={index} icon={tag.icon} className='mt-2'>
                        {tag.name}
                    </Pill>
                ))}
            </div>
        </div>
    );
};

export default Card;

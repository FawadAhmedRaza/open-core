import React from 'react';
import Card from '@/components/card';
import SearchBar from '@/components/search-bar';
import Div from '@/components/ui/div';
import { RESOURCES_DATA } from '@/_mock/_resources';

const Resources = () => {
  return (
    <Div className='flex flex-col gap-8 sm:gap-16 bg-neutral md:bg-white  '>
      <SearchBar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 auto-rows-min">
        {RESOURCES_DATA?.map((resource, index) => (
          <Card
            key={resource.id}
            data={resource}
            className={`${index < 3 ? 'md:mb-10' : 'hidden md:block'} cursor-pointer`}
          />
        ))}
      </div>
    </Div>
  );
};

export default Resources;

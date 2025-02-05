import React from 'react';

interface Subtitle {
    time: string;
    company: string;
    description: string;
  }
  
  interface WorkCardProps {
    title: string;
    subtitle: Subtitle; // Updated type definition
    image: string;
    link: string;
  }
  
  export default function WorkCard({ title, subtitle, image, link }: WorkCardProps) {
    return (
      <div className='flex justify-center'>
          <div className='w-full bg-transparent rounded-md'>
              <div className=''>
                  <div className='inline-flex items-center text-lg sm:text-2xl gap-3 font-sfpro'>
                      <div>{subtitle.time}</div> - 
                      <div>{title}</div>
                  </div>
                  <div className='text-4xl sm:text-6xl font-sfpro font-extrabold'>{subtitle.company}</div>
              </div>
          </div>
      </div>
    );
  }
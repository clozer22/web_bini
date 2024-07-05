import React from 'react'
import Image from 'next/image'
import banner from '../../assets/bini-cherry-banner-web.webp';
const page = () => {
  return (
    <div className='pt-[5rem] md:pt-[4rem]'>
        <Image className='w-full h-full' src={banner} />
    </div>
  )
}

export default page
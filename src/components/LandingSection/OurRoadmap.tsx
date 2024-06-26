import React from 'react'
import Image from 'next/image'
import OurRoadmapImage from '../../../public/images/OurRoadmapImage.png'

const OurRoadmap = () => {
  return (
    <section className='w-full bg-black'>
        <main className='max-w-[1380px] m-auto'>
            <div className='py-10 w-full flex-between flex-col lg:flex-row px-5 lg:px-0 gap-10 lg:gap-0'>
                <div className='flex-[1] w-full flex flex-col items-start justify-center gap-5'>
                    <h1 className='text-2xl lg:text-5xl text-white font-normal'>Our Roadmap</h1>
                    <div className='flex flex-col items-start justify-center'>
                    <p className='text-sm md:text-lg text-white/50 font-normal flex-center gap-1'>See the milestones that brought us here,</p>
                    <p className='text-sm md:text-lg text-white/50 font-normal flex-center gap-1'>and get a sneak peak of what’s next.</p>
                    </div>
                <div className='flex flex-col items-start justify-center'>
                    <p className='text-sm md:text-lg text-white/50 font-normal flex-center gap-1'>Have some feature request?</p>
                    <p className='text-sm md:text-lg text-white/50 font-normal flex-center gap-1'><span className='text-white underline'>Join our Discord</span>and tell us more!</p>
                    </div>
                </div>
                <div className='flex-[2] w-full pt-10 lg:py-0 flex items-end lg:items-center justify-center'>
                    <Image src={OurRoadmapImage} alt='' className='w-full object-cover' />
                </div>
            </div>
        </main>
    </section>
  )
}

export default OurRoadmap
import React from 'react'
import Image from 'next/image'
import BG from '../../../public/images/FooterBG.png'

const FooterSection = () => {
  return (
    <section className=''>
        <main className='py-10 w-full flex-between flex-col gap-5'>
            <div className='flex-[1] w-full flex-between flex-col lg:flex-row px-5 lg:px-28 relative'>
              <div className='flex-[1] flex flex-col items-start justify-center gap-3'>
                <h1 className='text-lg text-white font-normal'>Try BaseHub Today</h1>
                <p className='text-md text-white/50 font-bold'>Start for free, then grow with your team.</p>
              </div>
              <div className='flex-[1] flex flex-col items-end justify-center'></div>
                <Image src={BG} alt='' className='w-full object-cover absolute top-0 z-[-1]' />
            </div>
        </main>
    </section>
  )
}

export default FooterSection
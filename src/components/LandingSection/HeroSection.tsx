import Image from 'next/image'
import React from 'react'
import LogoIcon from '../../../public/images/LogoIcon.png'
import CompanyImage1 from '../../../public/images/Basewell.png'
import CompanyImage2 from '../../../public/images/Scale.png'
import CompanyImage3 from '../../../public/images/ReactMiami.png'
import CompanyImage4 from '../../../public/images/Basement.png'
import { Button } from '../ui/button'
import AppImage from '../../../public/images/AppImage.png'

const HeroSection = () => {
  return (
    <section className='w-full bg-black relative'>
        <main className='max-w-[1380px] m-auto'>
            <div className='pt-28 pb-5 w-full flex-center flex-col relative'>
                <div className='flex-[1] w-full flex-center flex-col gap-5 px-5 lg:absolute top-28'>
                    <span className='max-w-fit py-2 px-5 flex-center gap-2 border-[1px] border-orange-1 rounded-full'>
                    <Image src={LogoIcon} alt='' className='onject-cover' />
                    <h1 className='text-xs text-header font-normal'>BaseHub Is Now Open for Everyone</h1>
                    </span>
                    <div className='flex-center flex-col gap-1'>
                    <h1 className='text-xl md:text-5xl text-white/60'>Fast, Collaborative, AI-Native</h1>
                    <h1 className='text-xl md:text-5xl text-white'>Content Management</h1>
                    </div>
                    <div className='hidden lg:flex-center flex-col'>
                    <p className='text-sm text-white/50 font-normal'>Make your website editable faster than ever with BaseHub, the Headless CMS that’s built for</p>
                    <p className='text-sm text-white/50 font-normal'>speed and collaborative workflows—all with the help of AI.</p>
                    </div>
                    <div className='flex-center lg:hidden text-center flex-col'>
                    <p className='text-sm text-white/50 font-normal'>Make your website editable faster than ever with BaseHub, the Headless CMS that’s built for speed and collaborative workflows—all with the help of AI.</p>
                    </div>
                    <span className='text-header'>Used by</span>
                    <div className='w-full flex-center flex-wrap lg:gap-5'>
                        <Image src={CompanyImage1} alt='' className='w-16 md:w-36 object-cover' />
                        <Image src={CompanyImage2} alt='' className='w-16 md:w-36 object-cover' />
                        <Image src={CompanyImage3} alt='' className='w-16 md:w-36 object-cover' />
                        <Image src={CompanyImage4} alt='' className='w-16 md:w-36 object-cover' />
                    </div>
                    <Button className="text-md text-black font-bold px-5 bg-button rounded-full hover:bg-button hover:text-white">
                    Get Started
                  </Button>
                </div>
                <div className='min-h-fit w-full flex-center lg:pt-48'>
                    <Image src={AppImage} alt='' className='w-full object-cover' />
                </div>
            </div>
        </main>
    </section>
  )
}

export default HeroSection
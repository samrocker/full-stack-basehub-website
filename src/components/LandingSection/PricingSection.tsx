import React from "react";
import Image from "next/image";
import UserIcon from '../../../public/icons/UserIcon.png'
import DisordIcon from '../../../public/icons/DiscordIcon.png'
import AiAssistantIcon from '../../../public/icons/AiAssistantIcon.png'

const PricingSection = () => {
  return (
    <section className="w-full bg-black">
      <main className="max-w-[1380px] m-auto">
        <div className="h-screen w-full flex-between flex-col gap-5 px-5 lg:px-0">
          <div className="flex-[1] w-full flex-center flex-col gap-5">
            <h1 className="text-xl md:text-3xl lg:text-5xl text-white font-normal text-center">
              Pricing
            </h1>
            <p className="text-sm md:text-lg text-white/50 font-normal flex-center flex-wrap text-center gap-1">
              Get started with a free Personal Account, or a Team with unlimited
              members.
              <span className="text-white underline">unlimited members.</span>
            </p>
          </div>
          <div className="flex-[1] w-full flex-center flex-col lg:flex-row gap-10">
            <div className="flex-[1] py-5 max-w-[384px] flex-between flex-col gap-5 border-b-[1px] border-white/30 px-5 rounded-xl">
              <div className="flex-[1] w-full flex-center flex-col gap-5 border-b-[1px] border-white/30">
                <p className="text-sm md:text-md text-white font-normal flex-center gap-1">
                  For Personal Use
                </p>
                <h1 className="text-lg text-white font-bold">Free</h1>
              </div>
              <div className="flex-[1] w-full flex-center flex-col gap-5">
                <div className="w-full flex-start justify-center gap-2">
                    <Image src={UserIcon} alt="" className="object-cover"  />
                    <h1 className="text-md text-white font-normal">Personal Workspace</h1>
                </div>
                <div className="w-full flex-start justify-center gap-2">
                    <Image src={DisordIcon} alt="" className="object-cover"  />
                    <h1 className="text-md text-white font-normal">Discord Support</h1>
                </div>
                <div className="w-full flex-start justify-center gap-2">
                    <Image src={AiAssistantIcon} alt="" className="object-cover"  />
                    <h1 className="text-md text-white font-normal">AI Assistant</h1>
                </div>
              </div>
              <div className="flex-[1] w-full flex flex-col gap-5 border-b-[1px] border-white/30 items-start justify-center">
              <h1 className="text-sm md:text-md text-white/50 font-normal flex-center gap-1"><span className="text-white underline">375 Blocks,</span> then $2.5 per 125</h1>
              </div>
            </div>
            <div className="flex-[1] max-w-[384px] flex-between flex-col gap-5 border-[1px] border-white/30 px-5 rounded-xl"></div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default PricingSection;

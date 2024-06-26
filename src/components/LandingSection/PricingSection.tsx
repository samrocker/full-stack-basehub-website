import React from "react";
import Image from "next/image";
import UserIcon from '../../../public/icons/UserIcon.png'
import DisordIcon from '../../../public/icons/DiscordIcon.png'
import AiAssistantIcon from '../../../public/icons/AiAssistantIcon.png'
import UnllimitedMembers from '../../../public/icons/UnllimitedMembers.png'
import { Button } from "../ui/button";

const PricingSection = () => {
  return (
    <section className="w-full bg-black">
      <main className="max-w-[1380px] m-auto">
        <div className="py-10 w-full flex-between flex-col gap-5 px-5 lg:px-0">
          <div className="flex-[1] pb-10 w-full flex-center flex-col gap-5">
            <h1 className="text-xl md:text-3xl lg:text-5xl text-white font-normal text-center">
              Pricing
            </h1>
            <p className="text-sm md:text-lg text-white/50 font-normal flex-center flex-wrap text-center gap-1">
              Get started with a free Personal Account, or a Team with unlimited
              members.
              <span className="text-white underline">unlimited members.</span>
            </p>
          </div>
          <div className="flex-[1] w-full flex-center flex-col md:flex-row gap-10">
            <div className="flex-[1] py-5 max-w-[384px] flex-between flex-col gap-5 border-[1px] border-white/20 px-5 rounded-xl">
              <div className="flex-[1] w-full flex-center flex-col gap-5 border-b-[1px] border-white/20 pb-4">
                <p className="text-sm md:text-md text-white font-normal flex-center gap-1">
                  For Personal Use
                </p>
                <h1 className="text-3xl text-white font-bold">Free</h1>
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
              <div className="flex-[1] w-full flex flex-col py-5 gap-3 items-start justify-center">
              <h1 className="text-xs md:text-md text-white/50 font-normal flex-start gap-1"><span className="text-white underline">375 Blocks,</span> then $2.5 per 125</h1>
              <h1 className="text-xs md:text-md text-white/50 font-normal flex-start gap-1"><span className="text-white underline">75K API Requests,</span> then $2.5 per 25K</h1>
              <h1 className="text-xs md:text-md text-white/50 font-normal flex-start gap-1"><span className="text-white underline">1M CDN Requests,</span> then $5 per 1M</h1>
              </div>
              <div className="flex-[1] flex-center flex-col gap-3">
                <Button className="bg-white/10 px-5 py-2 text-white text-md font-normal rounded-full">Get Started For Free</Button>
                <p className="text-sm text-white/50">No credit card required</p>
              </div>
            </div>
            <div className="flex-[1] py-5 max-w-[384px] flex-between flex-col gap-5 border-[1px] border-white/20 px-5 rounded-xl">
              <div className="flex-[1] w-full flex-center flex-col gap-5 border-b-[1px] border-white/20 pb-4">
                <p className="text-sm md:text-md text-white font-normal flex-center ">
                  For Teams
                </p>
                <h1 className="text-sm text-white/50 font-bold"><span className="text-white text-3xl">$29 </span>/month</h1>
              </div>
              <div className="flex-[1] w-full flex-center flex-col gap-5">
                <div className="w-full flex-start justify-center gap-2">
                    <Image src={UnllimitedMembers} alt="" className="object-cover"  />
                    <h1 className="text-md text-white font-normal premium-text-color">Unlimited Members</h1>
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
              <div className="flex-[1] w-full flex flex-col py-5 gap-3 items-start justify-center">
              <h1 className="text-xs md:text-md text-white/50 font-normal flex-start gap-1"><span className="text-white underline">500 Blocks,</span> then $2.5 per 125</h1>
              <h1 className="text-xs md:text-md text-white/50 font-normal flex-start gap-1"><span className="text-white underline">100K API Requests,</span> then $2.5 per 25K</h1>
              <h1 className="text-xs md:text-md text-white/50 font-normal flex-start gap-1"><span className="text-white underline">2M CDN Requests,</span> then $5 per 1M</h1>
              </div>
              <div className="flex-[1] flex-center flex-col gap-3">
                <Button className="bg-white/10 px-5 py-2 text-white text-md font-normal rounded-full">Get Started For Free</Button>
                <p className="text-sm text-white/50">Payments secured by Stripe</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default PricingSection;

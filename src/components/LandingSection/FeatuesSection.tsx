import Image from "next/image";
import React from "react";
import Image1 from "../../../public/images/Realtime.png";
import Image2 from "../../../public/images/AiStructure.png";
import Image3 from '../../../public/images/safeSDK.png';
import Image4 from '../../../public/images/AllEssentials.png'
import Image5 from '../../../public/images/ViewChanges.png'
import { Button } from "../ui/button";

const WorkBetter = () => {
  return (
    <section className="w-full bg-black">
      <main className="max-w-[1380px] m-auto">
        <div className="min-h-fit py-10 w-full flex flex-col gap-10 px-5 lg:px-0">
          <div className="flex-[1] w-full flex-center flex-col gap-5 py-10">
            <div className="flex-center flex-col">
              <h1 className="text-lg md:text-3xl lg:text-5xl text-white font-normal text-center">
                Features that make you work better
              </h1>
              <p className="text-sm text-white/50 font-normal text-center">
                Query your repository with our typesafe SDK, or with any GraphQL
                Client of your choosing.
              </p>
            </div>
          </div>
          <div className="flex-[1] w-full flex flex-col lg:flex-row gap-5">
            <div className="h-full flex-[1] w-full flex flex-col lg:flex-row-reverse bg-white/10 py-3 px-5 lg:pl-5 rounded-3xl gap-10">
              <div className="h-full flex-[1] flex flex-col items-start justify-start py-3">
                <h1 className="text-lg text-white font-bold">
                  Realtime, Multiplayer Presence
                </h1>
                <p className="text-sm text-header font-normal">
                  Work with your team in real time. You’ll
                  see their faces as they move through
                  the Repository.
                </p>
              </div>
              <div className="flex-[1] w-full flex flex-col items-end justify-center">
                <Image src={Image1} alt="Realtime" className="w-full object-cover" />
              </div>
            </div>
            <div className="h-full flex-[1] w-full flex flex-col lg:flex-row-reverse bg-white/10 py-3 px-5 lg:pl-5 rounded-3xl gap-10">
              <div className="h-full flex-[1] flex flex-col items-start justify-start py-3">
                <h1 className="text-lg text-white font-bold">
                  AI-Driven Structure
                </h1>
                <p className="text-sm text-header font-normal">
                Generate entire content models with
                natural language. Try it out with things
                like “a blog post about space travel”, or
                “model a documentation site”.
                </p>
              </div>
              <div className="flex-[1] w-full flex flex-col items-end justify-center">
                <Image src={Image2} alt="AI Structure" className="w-full object-cover" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="flex-between flex-col-reverse gap-5 bg-white/10 px-5 py-5 rounded-xl">
              <div className="h-full w-full flex flex-col items-start justify-start py-5 px-2">
                <h1 className="text-lg text-white font-bold">
                A type-safe SDK
                </h1>
                <p className="text-sm text-header font-normal">
                Install and run our SDK generator, which introspects
                your repositories’ content to output automatic
                TypeScript types. <span className="underline">Learn more</span>
                </p>
              </div>
              <div className="flex w-full flex-col items-end justify-center">
                <Image src={Image3} alt="Safe SDK" className="w-full object-cover" />
              </div>
            </div>
            <div className="flex-between flex-col-reverse gap-5 bg-white/10 px-5 py-5 rounded-xl">
              <div className="h-full w-full flex flex-col items-start justify-start py-5 px-2">
                <h1 className="text-lg text-white font-bold">
                  Easy Integration
                </h1>
                <p className="text-sm text-header font-normal">
                  Integrate seamlessly with existing tools and workflows.
                </p>
              </div>
              <div className="flex w-full flex-col items-end justify-center">
                <Image src={Image4} alt="Easy Integration" className="w-full object-cover" />
              </div>
            </div>
            <div className="flex-between flex-col-reverse gap-5 bg-white/10 px-5 py-5 rounded-xl">
              <div className="h-full w-full flex flex-col items-start justify-start py-5 px-2">
                <h1 className="text-lg text-white font-bold">
                  Secure and Scalable
                </h1>
                <p className="text-sm text-header font-normal">
                  Built with security and scalability in mind.
                </p>
              </div>
              <div className="flex w-full flex-col items-end justify-center">
                <Image src={Image5} alt="Secure and Scalable" className="w-full object-cover" />
              </div>
            </div>
          </div>
          <div className="py-5 w-full flex-between px-5 bg-[#FF6C00] rounded-xl">
            <h1 className="text-lg lgLtext-xl text-black font-bold">Try BaseHub Today</h1>
            <Button className="rounded-full bg-black text-white">Get Started</Button>
          </div>
        </div>
      </main>
    </section>
  );
};

export default WorkBetter;

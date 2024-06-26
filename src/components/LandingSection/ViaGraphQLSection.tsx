import React from "react";
import Image from "next/image";
import ViaGraphQLImage from '../../../public/images/ViaGraphQLImage.png'
import ArrowIcon from '../../../public/icons/arrow.png'

const BuildingBlockSection = () => {
  return (
    <section className="w-full bg-black">
      <main className="max-w-[1380px] m-auto  ">
        <div className="min-h-fit pb-10 w-full flex-between flex-col gap-10 px-5">
          <div className="flex-[1] w-full flex-center flex-col gap-5">
            <h1 className="text-lg md:text-3xl lg:text-5xl text-white font-normal">
            Deliver your content via GraphQL
            </h1>
            <div className="hidden lg:flex-center flex-col">
              <p className="text-sm text-white/50 font-normal">
                Work on a beautiful, Notion-like document. Press “/” and pick a
                block from a selection from
              </p>
              <p className="text-sm text-white/50 font-normal">
                over a dozen options.
              </p>
            </div>
            <div className="flex-center lg:hidden flex-col">
              <p className="text-sm text-center text-white/50 font-normal">
                Work on a beautiful, Notion-like document. Press “/” and pick a
                block from a selection from over a dozen options.
              </p>
            </div>
          </div>
          <div className="flex-[1] w-full flex-center flex-col gap-7">
            <Image src={ViaGraphQLImage} alt="" className="w-full object-cover" />
            <div className="flex flex-col items-start justify-center gap-5">
            <p className="text-sm text-center text-white/50 font-normal flex-center gap-1">
            <Image src={ArrowIcon} alt="" className="object-cover" />
            Get started quickly with <span className="underline">the basehub SDK.</span> Type-safe and lightweight.
            </p>
            <p className="text-sm text-center text-white/50 font-normal flex-center gap-1">
            <Image src={ArrowIcon} alt="" className="object-cover" />
            Query a performant GraphQL API, with an easy-to-understand API design.
            </p>
            <p className="text-sm text-center text-white/50 font-normal flex-center gap-1">
            <Image src={ArrowIcon} alt="" className="object-cover" />
            Easy to integrate with Next.js. Check out <span className="underline">our docs</span>
            </p>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default BuildingBlockSection;

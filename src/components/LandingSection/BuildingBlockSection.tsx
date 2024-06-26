import React from "react";
import Image from "next/image";
import BuildingBlockImage from '../../../public/images/BuildingBlocksImage.png'
import ArrowIcon from '../../../public/icons/arrow.png'

const BuildingBlockSection = () => {
  return (
    <section className="w-full bg-black">
      <main className="max-w-[1380px] m-auto">
        <div className="min-h-fit pb-10 w-full flex-between flex-col gap-10 px-5">
          <div className="flex-[1] w-full flex-center flex-col gap-5">
            <h1 className="text-lg md:text-3xl lg:text-5xl text-white font-normal">
              Building blocks for your website
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
            <Image src={BuildingBlockImage} alt="" className="w-full object-cover " />
            <div className="flex flex-col items-start justify-center gap-5">
            <p className="text-sm text-center text-white/50 font-normal flex-center gap-1">
            <Image src={ArrowIcon} alt="" className="object-cover" />
            Model and write your content in one go, without the context switch.
            </p>
            <p className="text-sm text-center text-white/50 font-normal flex-center gap-1">
            <Image src={ArrowIcon} alt="" className="object-cover" />
            Drag-and-drop, duplicate, multi-select Blocks for faster workflows.
            </p>
            <p className="text-sm text-center text-white/50 font-normal flex-center gap-1">
            <Image src={ArrowIcon} alt="" className="object-cover" />
            Build Components to reuse, just like you’d do in Figma or in React.
            </p>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default BuildingBlockSection;

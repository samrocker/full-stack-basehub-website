import React from "react";
import Image from "next/image";
import DownIcon from "../../../public/icons/downIcon.png";

const FrequentlyAskedQuestionsSection = () => {
  return (
    <section className="w-full bg-black">
      <main className="max-w-[1380px] m-auto">
        <div className="py-10 w-full flex flex-col gap-5 px-5 lg:px-0 items-start justify-center">
          <h1 className="text-2xl text-white lg:text-4xl">
            Frequently Asked Questions
          </h1>
          <div className="w-full px-5 lg:px-16 flex flex-col items-start gap-7">
          <div className="flex gap-1 items-start justify-center">
            <Image src={DownIcon} alt="" className="object-cover" />
            <p className="text-sm md:text-md text-white font-normal flex-center gap-1">
            What happens when I reach the limit on the number of Blocks?
            </p>
          </div>
          <div className="flex gap-1 items-start justify-center">
            <Image src={DownIcon} alt="" className="object-cover" />
            <p className="text-sm md:text-md text-white font-normal flex-center gap-1">
            What happens when I reach the limit on the number of API Requests made?
            </p>
          </div>
          <div className="flex gap-1 items-start justify-center">
            <Image src={DownIcon} alt="" className="object-cover" />
            <p className="text-sm md:text-md text-white font-normal flex-center gap-1">
            How are the number of Blocks counted?
            </p>
          </div>
          <div className="flex gap-1 items-start justify-center">
            <Image src={DownIcon} alt="" className="object-cover" />
            <p className="text-sm md:text-md text-white font-normal flex-center gap-1">
            Is there any free trial available for the Team Plan?
            </p>
          </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default FrequentlyAskedQuestionsSection;

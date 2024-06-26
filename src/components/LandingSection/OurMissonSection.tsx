import Image from "next/image";
import React from "react";
import LinkIcon from '../../../public/icons/LinkIcon.png'

const OurMissonSection = () => {
  return (
    <section className="w-full bg-black">
      <main className="max-w-[1380px] m-auto">
        <div className="py-10 w-full flex flex-col gap-10 items-start justify-center px-5 lg:px-0">
          <h1 className="text-2xl md:text-5xl text-white font-light">
            Our Misson
          </h1>
          <div className="flex flex-col gap-5">
            <p className="text-2xl lg:text-5xl text-white/50 font-light">
              We want to change how content <br className="hidden lg:block" />{" "}
              is written and distributed.
            </p>
            <p className="text-2xl lg:text-5xl text-white font-light">
              We want to build the best tools to help{" "}
              <br className="hidden lg:block" /> ambitious content
              teams—developers, <br className="hidden lg:block" /> marketers,
              bloggers, journalists—write <br className="hidden lg:block" />{" "}
              better content, faster.
            </p>
          </div>
          <span className="flex-center gap-2 border-[1px] border-white/50 py-3 px-5 cursor-pointer text-xs cursor-pointer md:text-md bg-white/10 text-white font-light rounded-full">
            <Image src={LinkIcon} alt="" className="object-cover cursor-pointer" />
            Read more about our mission
          </span>
        </div>
      </main>
    </section>
  );
};

export default OurMissonSection;

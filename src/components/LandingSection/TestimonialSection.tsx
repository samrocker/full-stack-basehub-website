import React from "react";
import Image from "next/image";
import TwitterTestimonial1 from "../../../public/images/TwitterTestimonial1.png";
import TwitterTestimonial2 from "../../../public/images/TwitterTestimonial2.png";
import TwitterTestimonial3 from "../../../public/images/TwitterTestimonial3.png";
import TwitterTestimonial4 from "../../../public/images/TwitterTestimonial4.png";
import TwitterTestimonial5 from "../../../public/images/TwitterTestimonial5.png";
import TwitterTestimonial6 from "../../../public/images/TwitterTestimonial6.png";
import TwitterTestimonial7 from "../../../public/images/TwitterTestimonial7.png";

const TestimonialSection = () => {
  return (
    <section className="w-full bg-black">
      <main className="max-w-[1380px] m-auto">
        <div className="py-10 w-full flex-between flex-col gap-10 px-5 lg:px-0">
          <div className="flex-[1] w-full flex-center flex-col gap-5">
            <h1 className="text-xl md:text-3xl lg:text-5xl text-white font-normal text-center">
              What people are saying
            </h1>
            <p className="text-sm md:text-lg text-white/50 font-normal flex-center gap-1">
              <span className="text-white underline">Follow us on X</span> to
              join the conversation.
            </p>
          </div>
          <div className="flex-[1] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="flex-[1] flex-start flex-col gap-5">
              <Image
                src={TwitterTestimonial1}
                alt=""
                className="w-full object-cover"
              />
              <Image
                src={TwitterTestimonial2}
                alt=""
                className="w-full object-cover"
              />
            </div>
            <div className="flex-[1] flex-start flex-col gap-5">
              <Image
                src={TwitterTestimonial3}
                alt=""
                className="w-full object-cover"
              />
              <Image
                src={TwitterTestimonial4}
                alt=""
                className="w-full object-cover"
              />
            </div>
            <div className="flex-[1] flex-start flex-col gap-5">
              <Image
                src={TwitterTestimonial5}
                alt=""
                className="w-full object-cover"
              />
              <Image
                src={TwitterTestimonial6}
                alt=""
                className="w-full object-cover"
              />
              <Image
                src={TwitterTestimonial7}
                alt=""
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default TestimonialSection;

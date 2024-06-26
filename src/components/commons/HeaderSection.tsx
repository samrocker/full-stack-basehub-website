import React from "react";
import Image from "next/image";
import Logo from "../../../public/images/Logo.png";
import Link from "next/link";
import { Button } from "../ui/button";
import MenuIcon from "../../../public/icons/menu-line.png";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const HeaderSection = () => {
  return (
    <section className="w-full absolute top-0 z-40 bg-white/5">
      <main className="max-w-[1380px] m-auto">
        <div className="py-5 px-5 flex-between">
          <div className="flex-[1] flex-start">
            <Image src={Logo} alt="" className="object-cover" />
          </div>
          <div className="flex-[1] hidden lg:flex-center gap-5">
            <Link href="/" className="text-sm text-header font-normal">
              Pricing
            </Link>
            <Link href="/" className="text-sm text-header font-normal">
              Documentation
            </Link>
            <Link href="/" className="text-sm text-header font-normal">
              Blog
            </Link>
            <Link href="/" className="text-sm text-header font-normal">
              Changelog
            </Link>
          </div>
          <div className="flex-[1] hidden lg:flex-end gap-3">
            <Button className="text-xs text-white font-medium px-5 bg-white/10 rounded-full">
              Log In
            </Button>
            <Button className="text-xs text-black font-bold px-5 bg-button rounded-full hover:bg-button hover:text-white">
              Get Started
            </Button>
          </div>
          <div className="flex-[1] flex-end lg:hidden">
            <Sheet>
              <SheetTrigger>
                <Image src={MenuIcon} alt="" className="object-cover invert" />
              </SheetTrigger>
              <SheetContent className="bg-black border-white/20">
                <div className="h-screen w-full flex flex-col gap-5 items-start justify-center">
                  <Link href="/" className="text-xl text-white font-bold">
                    Pricing
                  </Link>
                  <Link href="/" className="text-xl text-white font-bold">
                    Documentation
                  </Link>
                  <Link href="/" className="text-xl text-white font-bold">
                    Blog
                  </Link>
                  <Link href="/" className="text-xl text-white font-bold">
                    Changelog
                  </Link>
                  <div className="flex gap-3">
                    <Button className="text-xs text-white font-medium px-5 bg-black rounded-full">
                      Log In
                    </Button>
                    <Button className="text-xs text-black font-bold px-5 bg-button rounded-full hover:bg-button hover:text-white">
                      Get Started
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </main>
    </section>
  );
};

export default HeaderSection;

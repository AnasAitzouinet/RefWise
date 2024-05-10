"use client"
import Hero from "@/components/Hero";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Reveal from '@/components/Reveal';
import { motion, useAnimation, useInView } from 'framer-motion';
import Stats from "@/components/Stats";
import How from "@/components/How";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster"
import { PopUpForm } from "@/components/Form";
export default function Home() {
  const refx = useRef(null);
  const inViewx = useInView(refx, { once: true });
  const controlsx = useAnimation();

  useEffect(() => {
    if (inViewx) {
      controlsx.start('visible');
    }
  }, [inViewx]);
  return (
    <main className="overflow-x-hidden">
      <Toaster />
      <Hero />
      <section className="lg:h-[87vh] lg:w-full relative flex lg:flex-row flex-col justify-center items-center px-[10%]  ">
        <img src="/Group.png" alt="" className="absolute top-0 left-0 object-cover z" />
        <div className="flex justify-center lg:flex-row flex-col-reverse  items-center lg:space-x-36   w-full">
          <motion.img
            ref={refx}
            variants={{
              hidden: { x: 100, opacity: 0 },
              visible: { x: 0, opacity: 1 }
            }}
            initial='hidden'
            animate={controlsx}
            transition={{ duration: 0.7 }}
            src="/BlackHero.webp" alt="" className="object-cover z-20 lg:w-[45%]" />
          <div className="flex-col flex justify-start items-start lg:space-y-8 space-y-4  pt-10    ">
            <Reveal>
              <h1 className="lg:text-[58px] text-[25px] font-extrabold leading-tight z-50"><span className="text-[#FF5D7D]"> Refer Someone in</span> <br /> your circle for a job</h1>
            </Reveal>
            <Reveal>

              <p className="font-medium lg:text-xl text-[#646464] z-50">
              Referring someone shouldn’t be a hassle.
              </p>
            </Reveal>
            <PopUpForm>
              <Button className='lg:text-xl lg:px-8 lg:py-6 rounded-full bg-[#FF5D7D] hover:bg-[#b8435a] self-start z-50'>
                Refer someone
              </Button>
            </PopUpForm>
          </div>
        </div>
      </section>
      <Stats />
      <How />

      <Footer />
    </main>
  );
}

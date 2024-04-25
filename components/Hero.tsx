"use client";
import React, { useEffect } from 'react'
import { Button } from './ui/button';
import { motion, useAnimation, useInView } from 'framer-motion';
import Reveal from './Reveal';
import { PopUpForm } from './Form';

export default function Hero() {
    const ref = React.useRef(null);
    const inView = useInView(ref, { once: true });
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [inView]);
    return (
        <div
            className='lg:h-[87vh] pb-8 w-screen bg-[#1B2847] flex flex-col items-center justify-start text-white relative'
        >
            <img src="/Particles.png" alt="particles in the backgorund" className='absolute right-0 bottom-0  animate-pulse' />
            <img src="/Particles-left.png" alt="particles in the backgorund" className='absolute top-0 left-0 animate-pulse' />

            <header className='w-screen h-[15%] py-5'>
                <nav className='flex justify-between px-[10%]  items-center '>
                    <h1 className='lg:text-[40px] text-[24px] font-bold'>RefWise</h1>
                    <PopUpForm>

                    <Button className='lg:text-xl  py-2 lg:px-7 rounded-full bg-[#FF5D7D] hover:bg-[#b8435a] z-50 '>
                        Join Now
                    </Button>
                    </PopUpForm>
                </nav>
            </header>

            <section className='w-screen h-full flex md:flex-row flex-col justify-center items-center px-5 md:px-[10%]'>
                <div className='md:w-[55%] h-full flex flex-col items-center   justify-start py-24 space-y-8 px-4 -mt-20 md:-mt-12'>
                    <Reveal width='100%'>
                        <h1 className='lg:text-[56px] xl:text-[66px]  text-[30px] md:text-[37px]  font-black w-full leading-tight'>
                            <span className='text-[#FFD04F]'>Earn up to £3,500</span> <br />
                            for each candidate referral.</h1>

                    </Reveal>
                    <Reveal width='100%'>
                        <p className='lg:text-[20px] text-[14px] pr-10 font-medium lg:pr-40'>Employers in the UK payout referral bonuses between £800 and £3,500 for a successful hire. Become a mentor and referee at your company.</p>
                    </Reveal>
                    <Button className='lg:text-xl lg:py-6 rounded-full bg-[#FF5D7D] hover:bg-[#b8435a]  self-start'>
                        Become a referee now
                    </Button>
                </div>
                <div className='md:w-[45%] h-full flex justify-center items-center px-2 -mt-20 md:-mt-24'>
                    <motion.img
                        ref={ref}
                        variants={{
                            hidden: { x: 100, opacity: 0 },
                            visible: { x: 0, opacity: 1 }
                        }}
                        initial='hidden'
                        animate={controls}

                        transition={{ duration: 0.7 }}
                        src="/HERO.webp" alt="black women in a yellow dress" className='object-cover z-20 w-[90%]' />
                </div>
            </section>
        </div>
    )
}

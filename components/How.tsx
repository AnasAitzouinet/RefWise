"use client"
import React from 'react'
import Reveal from './Reveal'
import { TRENDING_SLIDER_NUMBERS } from './Numbers'
import { object } from 'zod'
import { Button } from './ui/button'
import { PopUpForm } from './Form'



const steps = [
    {
        id: 1,
        title: 'Login with LinkedIn',
        description: 'Connect your LinkedIn account to get started. We will never post anything on your behalf.',
        number: './1.svg'
    },
    {
        id: 2,
        title: 'Set up Job Openings',
        description: 'Choose a job opening you think your friend would be a great fit for.',
        number: './2.svg'
    },
    {
        id: 3,
        title: 'Match With Candidates',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        number: './3.svg'
    },
    {
        id: 4,
        title: 'Earn your Referral Bonus',
        description: 'Get rewarded when your friend gets hired. You can choose between cash or a donation to charity.',
        number: './4.svg'
    }
]


export default function How() {
    return (
        <div className='w-screen flex flex-col justify-center items-start text-[#1B2847] px-[10%] space-y-5 lg:px-[8%] pt-[16%] lg:pt-0' >
            <h1 className='lg:text-[58px] text-[25px] font-extrabold'>
                <Reveal>
                    We’ve streamlined your  <span className='text-pink-500'>  referral </span>
                </Reveal>
            </h1>
            <div className='flex flex-col justify-center items-center h-full w-full gap-y-10 py-5
                md:w-full
                 lg:flex-row lg:gap-x-14 lg:gap-y-0 lg:justify-center lg:items-start 
            '>
                {
                    steps.map((step, index) => (
                        <div key={index} className='flex md:w-full justify-start items-center gap-x-7  lg:relative lg:py-16'>
                            <img src={step.number} alt="" className='object-cover w-[20%] md:w-[5rem]  lg:absolute lg:left-0' />
                            <div className='flex flex-col justify-center items-start space-y-2 lg:grid lg:grid-rows-2 lg:h-full lg:w-full
                                lg:justify-center lg:items-center
                              lg:left-14 lg:bottom-0 lg:absolute'>
                                <h1 className='text-[#1B2847] font-bold text-[15px] xs:text-[18px] md:text-[25px]  lg:text-[28px] lg:self-end'>
                                    <Reveal>

                                        {step.title}
                                    </Reveal>
                                </h1>
                                <div className='text-[#1B2847] text-[11px] xs:text-[13px] md:text-[15px] lg:self-start'>
                                    <Reveal>
                                        {step.description}
                                    </Reveal>

                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <PopUpForm>
                <Button className='w-3/4 py-5 rounded-full bg-[#FF5D7D] hover:bg-[#b8435a] self-center  lg:w-1/4'>
                Get early access
                </Button>
            </PopUpForm>
        </div>
    )
}

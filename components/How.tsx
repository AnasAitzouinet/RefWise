"use client"
import React from 'react'
import Reveal from './Reveal'
import { TRENDING_SLIDER_NUMBERS } from './Numbers'
import { object } from 'zod'



const steps = [
    {
        id: 1,
        title: 'Connect your LinkedIn',
        description: 'Connect your LinkedIn account to get started. We will never post anything on your behalf.',
        number: '1'
    },
    {
        id: 2,
        title: 'Choose a job Opening',
        description: 'Choose a job opening you think your friend would be a great fit for.',
        number: '2'
    }
]


export default function How() {
    return (
        <div className='w-screen flex flex-col justify-center items-start text-[#1B2847] px-[10%] ' >
            <h1 className='lg:text-[58px] text-[25px] font-extrabold'>
                <Reveal>
                    It's This <span className='text-pink-500'>  Simple </span>
                </Reveal>
            </h1>
            <div className='grid grid-rows-4 h-full w-full space-y-8 py-5 justify-center items-center '>
                {
                    steps.map((step, index) => (
                        <div key={index} className=' grid grid-cols-2   '>
                            {

                                <div
                                    style={{
                                        stroke: "gray",
                                        strokeWidth: "1px",
                                        fill: "none",
                                    }}
                                    className={`h-20 w-20     `}
                                    dangerouslySetInnerHTML={{
                                        __html: TRENDING_SLIDER_NUMBERS[step.number as any],
                                    }}
                                />
                            }
                            <div className='flex flex-col justify-center items-start'>
                                <h1 className='text-lg font-bold'>{step.title} </h1>
                                <p className='text-sm font-semibold'>{step.description} </p>
                            </div>
                        </div>
                    ))
                }
             </div>
        </div>
    )
}

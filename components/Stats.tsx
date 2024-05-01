"use client"
const stats = [
    { id: 1, name: 'average referral bonus', value: '£1,000', number: 1000 },
    { id: 2, name: 'companies have a referral scheme', value: '3.7x', number: 3.7 },
    { id: 3, name: 'more chance to hire a candidate through referrals', value: '46,000', number: 46000 },
]
import Reveal from "./Reveal"
import { Plus, PlusIcon } from "lucide-react"

export default function Stats() {
    return (
        <div className="w-screen h-[60vh] my-[35%] lg:my-[5%] flex justify-center items-center">
            <div className="bg-[#EFEFEF] lg:w-[75%] lg:h-[78%] py-[10%] md:py-[2%] px-[10%] rounded-3xl flex flex-col justify-start items-center">
                <div className="flex flex-col justify-start items-center py-[5%]">
                    <h1 className="font-bold text-xl lg:text-3xl text-center text-[#1B2847]">
                        <Reveal>
                            Did you know that most companies reward
                        </Reveal>
                    </h1>
                    <h1 className="font-bold text-xl lg:text-3xl text-center text-[#1B2847]">
                        <Reveal>
                            their employees for bringing in quality hires?
                        </Reveal>
                    </h1>
                </div>
                <div className="grid
                 lg:grid-cols-3 lg:grid-rows-none grid-rows-3  space-y-5 lg:space-y-0 divide-y lg:divide-x lg:divide-y-0 divide-gray-300 ">
                    {
                        stats.map(stat => (
                            <div key={stat.id} className="grid grid-rows-2 place-items-center  w-full h-full py-1">
                                <Reveal>
                                    <h1 className="font-black text-2xl lg:text-5xl text-center text-[#1B2847] flex justify-center items-center">
                                        {stat.value}
                                        <PlusIcon  strokeWidth={5}  className="text-pink-500"/>    
                                    </h1>
                                </Reveal>
                                <Reveal>
                                    <h1 className="font-semibold text-lg text-[#5d6475] text-center">
                                        {stat.name}
                                    </h1>
                                </Reveal>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}



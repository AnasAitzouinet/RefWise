
import { AccordionTrigger, AccordionContent, AccordionItem, Accordion } from "@/components/ui/accordion"

export default function Faq() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="mx-auto max-w-3xl space-y-6">
                    <div className="space-y-2 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Frequently Asked Questions
                            </h2>
                        <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Get answers to the most common questions about our product.
                        </p>
                    </div>
                    <Accordion collapsible type="single">
                        <AccordionItem value="why">
                            <AccordionTrigger className="flex items-center justify-between text-lg font-medium">
                                Why would my company pay me a referral bonus?
                            </AccordionTrigger>
                            <AccordionContent className="space-y-4 pt-4">
                                <p className="text-gray-500 dark:text-gray-400">
                                    Most UK and worldwide companies highly value job referrals and you may ask yourself why that is. First of all you make it easier to recruit a new talent in your company by referring someone. Secondly, your candidate will already be briefed and evaluated by yourself on the actual job and your company puts more trust in you since you are already employed. There are various other reasons for companies to pay a referral bonus to their employees for a job referral such as time and efficiency.
                                </p>

                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="bonus">
                            <AccordionTrigger className="flex items-center justify-between text-lg font-medium">
                                How does my company pay me the referral bonus?
                            </AccordionTrigger>
                            <AccordionContent className="space-y-4 pt-4">
                                <p className="text-gray-500 dark:text-gray-400">
                                    Companies usually pay a fixed amount (ranging from £1,200 to £3,800) per candidate referred to them. For instance, let’s say you have referred a candidate that you matched on RefWise or from somewhere else. The candidate goes through the recruitment process of your company and then gets the job. Once your candidate is hired, your company will directly pay you a referral bonus in the same way they send you other bonuses or your salary.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="starting">
                            <AccordionTrigger className="flex items-center justify-between text-lg font-medium">
                                How do I start referring candidates?
                            </AccordionTrigger>
                            <AccordionContent className="space-y-4 pt-4">
                                <ul className="space-y-3 text-gray-500 dark:text-gray-400">
                                    <li className="flex items-start gap-2">
                                        <CheckIcon className="h-5 w-5 flex-shrink-0 text-primary" />
                                        Once you have set up and completed your profile, you will be matched with candidates looking for a job in your company or a similar job. RefWise is powered by an advanced matchmaking algorithm considering many variables such as roles, skills, the job details, the industry, etc.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckIcon className="h-5 w-5 flex-shrink-0 text-primary" />
                                        Once you have found candidates on the platform, you can chat and schedule calls with them. The goal is to get to know them better and evaluate if there is a good fit for the job openings of your company.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckIcon className="h-5 w-5 flex-shrink-0 text-primary" />
                                        When you have determined if a candidate fits the job, refer him/her to your company by contacting your manager, your colleagues or your HR department.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckIcon className="h-5 w-5 flex-shrink-0 text-primary" />
                                        Your candidate will then begin the recruitment process. If he/she is hired you will get compensated for your referral.
                                    </li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="prices">
                            <AccordionTrigger className="flex items-center justify-between text-lg font-medium">
                                Is this platform free?
                            </AccordionTrigger>
                            <AccordionContent className="space-y-4 pt-4">
                                <p className="text-gray-500 dark:text-gray-400">
                                    Yes it is free to use for now.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="eligibilty">
                            <AccordionTrigger className="flex items-center justify-between text-lg font-medium">
                                Am I eligible to become a referee?
                            </AccordionTrigger>
                            <AccordionContent className="space-y-4 pt-4">
                                <p className="text-gray-500 dark:text-gray-400">
                                    To become a referee, you simply need to be currently employed in a company. You can then check with your company if and how much they pay for an employee referral.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="privacy">
                            <AccordionTrigger className="flex items-center justify-between text-lg font-medium">
                                How does the platform ensure data security and privacy?
                            </AccordionTrigger>
                            <AccordionContent className="space-y-4 pt-4">
                                <p className="text-gray-500 dark:text-gray-400">
                                    All of your data is private and protected on the platform. Your data is anonymously used by our matchmaking algorithm to match referees and candidates together.                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </section>
    )
}

function CheckIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 6 9 17l-5-5" />
        </svg>
    )
}


function ChevronDownIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m6 9 6 6 6-6" />
        </svg>
    )
}
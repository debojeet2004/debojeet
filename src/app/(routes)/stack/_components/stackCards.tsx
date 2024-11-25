import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react'


export interface StackItem {
    title: string;
    purpose: string;
    iconurl: string;
}

interface StackCardsProps {
    stacks: StackItem[];
    type: "Design" | "Technologies" | "Productivity" | "Ai Tools" | "Developer Tools";
}

export default function StackCards({ stacks, type }: StackCardsProps) {
    return (
        <div className='border border-stone-700 rounded-md p-6 flex flex-col gap-4'>
        <p className='text-2xl font-thin'>{type}</p>
        <div className={cn("grid", "grid-cols-1", type === "Technologies" ? "md:grid-cols-3" : "md:grid-cols-2", "gap-6", "w-6xl")}>
            {stacks.map((stack, index) => (
                <Card key={index} className='border p-3 flex justify-start items-center gap-2 bg-stone-800 hover:scale-105 transition-transform duration-300'>
                    <div className='relative w-12 h-12 rounded-md flex items-center justify-center '>
                        <Image
                            src = {stack.iconurl}
                            alt = {stack.title}
                            width={40}
                            height={40}
                            className='z-10'
                        />
                        <div className='absolute translate-x-1/2 translate-y-1/2  bg-stone-300/80 left-0 top-0 w-6 h-6 rounded-full blur-[15px]'/>
                    </div>
                    <div className='w-[75%]'>
                        <p className='text-md font-semibold'>{stack.title}</p>
                        <p className='text-sm font-thin text-stone-400'>{stack.purpose}</p>
                    </div>
                </Card>
            ))}
        </div>
        </div>
    )
}
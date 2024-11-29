import React from 'react'
import Footer from './_components/footer'
// import { SidebarTrigger } from '@/components/ui/sidebar'
import AnimatedShinyText from '@/components/ui/AnimatedShinyText'
import { ArrowRightIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

function page() {
  return (
    <div>
      <div className='max-w-5xl mx-auto pt-16  border-white flex flex-col justify-center items-center '>
        {/* <SidebarTrigger className="-ml-1" /> */}
        <div className={cn("group rounded-full border border-black/10 bg-white/10 backdrop-blur-md text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-white/20 dark:border-white/10 dark:bg-stone-700/10 dark:hover:bg-stone-700/20",)}>
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 bg-white/10 backdrop-blur-lg  rounded-full shadow-lg">
                <span className='text-sm '>🙏 नमस्ते</span>
                <ArrowRightIcon className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
        </div>
        <p className='text-7xl mt-4'>Transforming <span className='underline underline-offset-8 decoration-red-500/50 decoration-4 italic'>concepts</span></p>
        <p className='text-7xl mt-6'>Into <span className='italic bg-stone-700/60 py-[0.1 rem]  px-3 rounded-lg'>Seamless</span> Realities</p>
        <p className='mt-6 text-md tracking-wide'>Hi, I am <span className=' text-red-200'>Debojeet Karmakar</span> a Fullstack developer and a Ui Designer</p>
      </div>
      <Footer/>
    </div>
  )
}

export default page
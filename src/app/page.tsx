import React from 'react'
import Footer from './_components/footer'
import AnimatedShinyText from '@/components/ui/AnimatedShinyText'
import { ArrowRightIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'
import BentoSection from './_components/bentoSection';


const testimonials = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    src: "/profileimage.jpg",
  },
  {
    quote:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    src: "/profileimage.jpg",
  },
  {
    quote:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Emily Watson",
    designation: "Operations Director at CloudScale",
    src: "/profileimage.jpg",
  },
  {
    quote:
      "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    name: "James Kim",
    designation: "Engineering Lead at DataPro",
    src: "/profileimage.jpg",
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Lisa Thompson",
    designation: "VP of Technology at FutureNet",
    src: "/profileimage.jpg",
  },
];



function Page() {

  return (
    <div>
      <div className='max-w-5xl mx-auto pt-16 flex flex-col justify-center items-center '>
        {/* <SidebarTrigger className="-ml-1" /> */}
        <div className={cn("group rounded-full border border-black/10 bg-white/10 backdrop-blur-md text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-white/20 dark:border-white/10 dark:bg-stone-700/10 dark:hover:bg-stone-700/20",)}>
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 bg-white/10 backdrop-blur-lg  rounded-full shadow-lg">
                <span className='text-sm '>🙏 नमस्ते, आपका स्वागत है </span>
                <ArrowRightIcon className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
        </div>
        <p className='text-7xl mt-4'>Transforming <span className='underline underline-offset-8 decoration-red-500/50 decoration-4 italic'>concepts</span></p>
        <p className='text-7xl mt-6'>Into <span className='italic bg-stone-700/60 py-[0.1 rem]  px-3 rounded-lg'>Seamless</span> Realities</p>
        <p className='mt-6 text-md tracking-wide'>Hi, I am <span className=' text-red-200'>Debojeet Karmakar</span> a Fullstack developer and a Ui Designer</p>

        {/* bento section */}
        <BentoSection/>
        {/* testimonials */}
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
      <Footer/>
    </div>
  )};


export default Page
"use client";
import React from 'react'
import Footer from './_components/footer'
import AnimatedShinyText from '@/components/ui/AnimatedShinyText'
import { ArrowRight, ArrowRightIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'
import BentoSection from './_components/bentoSection';
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link';


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


type ProjectsTypes = {
  id: number;
  slug: string,
  title: string;
  description: string;
  month: "January" | "February" | "March" | "April" | "May" | "June" | "July" | "August" | "September" | "October" | "November" | "December";
  year: number;
  image: string;
};

const Projects: ProjectsTypes[] = [
  {
    id: 1,
    slug: 'dsfdgfgfsf',
    title: "Let's Meet App",
    description: "A video conferencing app similar to Zoom, Google Meet, and Microsoft Teams",
    month: "August",
    year: 2024,
    image: "https://plus.unsplash.com/premium_photo-1680883415362-238794b19dde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWVzdGhldGljfGVufDB8fDB8fHww"
  },
  {
    id: 2,
    slug: 'dsfgjhgfjsf',
    title: "E-Learning Platform",
    description: "A comprehensive online learning platform for students and professionals",
    month: "September",
    year: 2024,
    image: "https://plus.unsplash.com/premium_photo-1680883415362-238794b19dde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWVzdGhldGljfGVufDB8fDB8fHww"
  },
  {
    id: 3,
    slug: 'dsdfgfdggfsf',
    title: "Healthcare Management System",
    description: "A digital solution for managing patient records and hospital operations",
    month: "November",
    year: 2024,
    image: "https://plus.unsplash.com/premium_photo-1680883415362-238794b19dde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWVzdGhldGljfGVufDB8fDB8fHww"
  },
  {
    id: 4,
    slug: 'dsdfgaddefdsf',
    title: "E-Commerce Platform",
    description: "A comprehensive online shopping platform for businesses and customers",
    month: "December",
    year: 2024,
    image: "https://plus.unsplash.com/premium_photo-1680883415362-238794b19dde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWVzdGhldGljfGVufDB8fDB8fHww"
  },
]



function Page() {

  return (
    <>
      <div className='max-w-5xl mx-auto mt-36 flex flex-col justify-center items-center '>
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
        {/* Project section */}
        <div className="max-w-6xl mx-auto py-8 ">
          <div className="flex flex-col gap-6">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="flex justify-between items-end">
                <div>
                  <h1 className="text-5xl font-thin tracking-tight mb-4">My Projects</h1>
                  <p className="text-muted-foreground">Dive into a collection of my innovative and diverse projects, showcasing creativity and technical expertise.</p>
                </div>
                <Link href="/projects">
                  <Button variant="link" className="ml-4 flex items-center group">
                    View All Projects 
                    <ArrowRightIcon className="group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </div>
            </motion.div>
            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {Projects.map((Project) => (
                <motion.div 
                  key={Project.id} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <div className="max-w-[30rem] rounded-xl overflow-hidden bg-gradient-to-br from-stone-950 to-stone-800 text-white shadow-lg transition-transform duration-300 group hover:scale-105">
                    <div className="relative h-48">
                      <Image
                        src={Project.image} 
                        alt={`${Project.id} screenshot`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                        priority={Project.id === 1}  // Only prioritize the first image
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-900 to-transparent" />
                      {/* <h2 className="absolute bottom-4 left-4 text-4xl font-bold">Earth</h2> */}
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-semibold mb-2">{Project.title}</h3>
                      <p className="text-stone-300 text-sm mb-4">
                        {Project.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex space-x-2">
                          <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center transition-transform duration-300 hover:scale-110">
                            <span className="text-xs">R</span>
                          </div>
                          <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center transition-transform duration-300 hover:scale-110">
                            <span className="text-xs">N</span>
                          </div>
                          <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center transition-transform duration-300 hover:scale-110">
                            <span className="text-xs">T</span>
                          </div>
                          <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center transition-transform duration-300 hover:scale-110">
                            <span className="text-xs">J</span>
                          </div>
                          <div className="w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center transition-transform duration-300 hover:scale-110">
                            <span className="text-xs">F</span>
                          </div>
                        </div>
                        <Link
                          href="#"
                          className="text-sm text-purple-400 hover:text-purple-300 transition-colors duration-200 flex items-center"
                        >
                          Explore More
                          <ArrowRight className="ml-1 w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        {/* testimonials */}
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
      <Footer/>
    </>
  )};


export default Page
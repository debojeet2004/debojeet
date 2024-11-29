"use client"

import React from 'react'
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

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

export default function BlogsPage() {

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex flex-col gap-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6"
        >
          <h1 className="text-5xl font-thin tracking-tight">Projects</h1>
          <p className="text-muted-foreground">Explore my projects for a glimpse into my creative endeavors and technical pursuits.</p>
        </motion.div>
        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
          {Projects.map((Project) => (
            <motion.div 
              key={Project.id} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Card key={Project.id} className="group hover:shadow-lg transition-all duration-300 bg-stone-950 flex flex-col justify-between pb-4">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <Image
                  src={Project.image}
                  alt={Project.title}
                  width={200}
                  height={180}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2">
                  <Button variant="secondary" size="sm" className='rounded-xl px-6'>
                  <Calendar className="h-4 w-4" />
                    {Project.month} {Project.year}
                  </Button>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                  {Project.title}
                </CardTitle>
              </CardHeader>
              <div className='flex flex-col justify-evenly items-start h-[22%] px-6'>
                  <p className="text-muted-foreground line-clamp-2">{Project.description}</p>
                  <div className='w-full flex justify-end items-center'>
                    <Link href={`/projects/${Project.slug}`}>
                      <Button variant="link" className=" p-0">Know more →</Button>
                    </Link>
                  </div>
              </div>
            </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
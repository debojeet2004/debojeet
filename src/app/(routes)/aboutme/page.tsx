'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
// import Image from 'next/image'

export default function AboutPage() {
  const [email, setEmail] = useState('')

  const thoughts = [
    { title: 'Productive Use Design Skills', category: 'Design', icon: '✏️' },
    { title: 'Freelancing in Digital Design', category: 'Business', icon: '💼' },
    { title: 'Designing for Shareability', category: 'Design', icon: '🔄' },
    { title: 'The Evolution of Digital Design', category: 'Design', icon: '🎨' },
  ]

  return (
    <div className="min-h-screen text-zinc-400">
      <div className="max-w-3xl mx-auto px-4 py-16 space-y-16">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl font-thin text-white mb-8">About Me</h1>
          <p className="text-lg leading-relaxed text-justify">
          A Computer Science student, weaving dreams in AI-ML. From Dhanbad&apos;s quiet lanes to West Bengal&apos;s the city of Joy, 
          I journey with art in my heart and code in my hands. Sketching my future, eager to learn, grow, and explore the vast canvas of life.
          </p>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative aspect-[16/9] overflow-hidden rounded-lg p-1 border border-stone-600"
        >
          {/* <Image
            src="/placeholder.svg?height=600&width=800"
            alt="Profile"
            width={800}
            height={440}
            className="object-cover border"
          /> */}
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6"
        >
          <p className="text-md leading-relaxed text-justify">
            I am Debojeet, a 4th-year Computer Science student specializing in AI-ML, currently interning as a Fullstack Developer at HyrecruitAi, 
            an AI-powered interview platform. Originally from Dhanbad, Jharkhand, I have always been passionate about art, thanks to my mom&apos;s support.
            In 2021, I moved to West Bengal for my B.Tech, marking a significant transition in my life. This experience has taught me the importance of 
            balancing creativity with technical skills, which I apply in my current role.
          </p>
          <p className="text-md leading-relaxed text-justify">
            As I navigate my final year, I am focused on gaining practical experience and building a strong personal brand. My internship has provided 
            valuable insights into the tech industry, and I am eager to leverage this knowledge in future projects. I am also exploring personal initiatives 
            like starting a YouTube channel and a blog to document my journey and share my learnings. My goal is to create impactful digital solutions and continue 
            growing both personally and professionally.
            <span className='text-red-400'>have to change this  thsi is not final remberber ok </span>
          </p>
        </motion.div>

        {/* Thoughts Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-thin text-white mb-1">Thoughts</h2>
          <p className="text-sm text-zinc-500 mb-8">Here are some of my thoughts and reflections on my journey so far.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {thoughts.map((thought, index) => (
              <Card 
                key={index} 
                className="bg-stone-900 border-stone-800 hover:border-stone-700 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="text-2xl mb-2">{thought.icon}</div>
                  <h3 className="text-white font-medium mb-1">{thought.title}</h3>
                  <p className="text-sm text-zinc-500">{thought.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-stone-900 p-6 rounded-lg border border-zinc-800"
        >
          <h3 className="text-xl font-semibold text-white mb-2">Join 10k+ Readers</h3>
          <p className="text-sm text-zinc-500 mb-4">Stay up to date with the latest insights. No spam.</p>
          <div className="flex gap-3">
            <Input
              type="email"
              placeholder="Your E-Mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-zinc-800 border-zinc-700 text-white"
            />
            <Button variant="default">Subscribe</Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}


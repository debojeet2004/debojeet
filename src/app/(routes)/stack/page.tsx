"use client"

import React from 'react'
import StackCards from './_components/stackCards'
import { motion } from 'framer-motion';
import { Stacks } from './data/stackData';


export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 mt-[2rem] md:mt-[4rem]">
      <div className="flex flex-col gap-6">
        {/* Header */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='space-y-2'
          >
            <h1 className="text-5xl font-thin tracking-tight">Stack</h1>
            <p className="text-muted-foreground">Discover the tech stack I use in my daily work, shaping my projects and driving innovation.</p>
          </motion.div>

        <div className='flex flex-col gap-10 max-w-4xl'>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            >
            <StackCards stacks={Stacks.design} type='Design'/>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            >
            <StackCards stacks={Stacks.productivity} type='Productivity'/>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            >
            <StackCards stacks={Stacks.technologies} type='Technologies'/>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <StackCards stacks={Stacks.developerTools} type='Developer Tools'/>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <StackCards stacks={Stacks.aiTools} type='Ai Tools'/>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
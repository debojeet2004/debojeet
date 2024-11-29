"use client"

import React from 'react'
import StackCards, { StackItem } from './_components/stackCards'
import { motion } from 'framer-motion';


interface StacksType {
  design: StackItem[];
  productivity: StackItem[];
  technologies: StackItem[];
  aiTools: StackItem[];
  developerTools: StackItem[];
}

const Stacks: StacksType = {
  design: [
    {
      title: "Figma",
      purpose: "UI design and wireframing",
      iconurl : '/figma.png'
    },
    {
      title: "Canva",
      purpose: "Graphic design and visual content",
      iconurl : '/canva.png'
    },
    {
      title: "Photoshop",
      purpose: "Image editing and manipulation",
      iconurl : '/photoshop.png'
    },
    {
      title: "Erasor.io",
      purpose: "Online whiteboard for team collaboration",
      iconurl : '/erasorio.png'
    },
  ],
  productivity: [
    {
      title: "Notion",
      purpose: "All-in-one workspace",
      iconurl : '/notion.png'
    },
    {
      title: "Slack",
      purpose: "Real-time team communication",
      iconurl : '/slack.png'
    },
    {
      title: "Google Calendar",
      purpose: "Time management",
      iconurl : '/googlecalendar.png'
    },
    {
      title: "YouTube Music",
      purpose: "Music streaming and discovery",
      iconurl : '/ytmusic.png'
    },
    {
      title: "Discord",
      purpose: "Voice, video, and text communication",
      iconurl : '/discord.png'
    },
    {
      title: "Microsoft Teams",
      purpose: "Collaboration and communication",
      iconurl : '/teams.png'
    },
  ],
  technologies: [
    {
      title: "React Js",
      purpose: "Building user interfaces",
      iconurl : '/react.png'
    },
    {
      title: "Next Js",
      purpose: "Server-rendered websites",
      iconurl : '/nextjs.png'
    },
    {
      title: "Node Js",
      purpose: "Server-side JavaScript",
      iconurl : '/nodejs.png'
    },
    {
      title: "Prisma",
      purpose: "ORM for Node.js",
      iconurl : '/prisma.png'
    },
    {
      title: "Postgres Js",
      purpose: "Relational database",
      iconurl : '/postgres.png'
    },
    {
      title: "MongoDb",
      purpose: "NoSQL database", 
      iconurl : '/mongodb.png'
    },
    {
      title: "Tailwind Css",
      purpose: "Rapid UI development",
      iconurl : '/tailwind.png'
    },
    {
      title: "Docker",
      purpose: "Containerization platform",
      iconurl : '/docker.png'
    },
    {
      title: "Redux Toolkit",
      purpose: "State management library",
      iconurl : '/redux.png'
    },
    {
      title: "Drizzle",
      purpose: "ORM for TypeScript",
      iconurl : '/drizzle.png'
    },
    {
      title: "GraphQL",
      purpose: "Query language for APIs",
      iconurl : '/graphql.png'
    },
    {
      title: "Express Js",
      purpose: "Node.js web framework",
      iconurl : '/expressjs.png'
    },
    {
      title: "Azure",
      purpose: "Cloud computing platform",
      iconurl : '/azure.png'
    },
    {
      title: "Javascript",
      purpose: "Dynamic programming language",
      iconurl : '/js.png'
    },
    {
      title: "Typescript",
      purpose: "Statically typed JavaScript",
      iconurl : '/typescript.png'
    },
  ],
  developerTools: [
    {
      title: "Vs Code",
      purpose: "Lightweight code editor",
      iconurl : '/vscode.png'
    },
    {
      title: "Github",
      purpose: "Version control and collaboration",
      iconurl : '/github.png'
    },
  ],
  aiTools: [
    {
      title: "Chat-Gpt",
      purpose: "AI-powered chatbot",
      iconurl : '/chatgpt.png'
    },
    {
      title: "Perplexity",
      purpose: "Creative content generation",
      iconurl : '/perplexity.png'
    },
    {
      title: "Github Copilot",
      purpose: "AI-powered code completion",
      iconurl : '/copilot.png'
    },
  ]
}


export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
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
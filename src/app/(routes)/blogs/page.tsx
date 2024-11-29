"use client"

import React from 'react'
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, Clock, Calendar } from "lucide-react"
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

type BlogsType = {
  id: number;
  slug: string,
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: "Life Experience" | "Technology" | "Travell";
  image: string;
};

const Blogs: BlogsType[] = [
  {
    id: 1,
    slug: "sdfgsdfgs",
    title: "Taking The First Step - Signing in to Life",
    excerpt: "Hey there, I am Debojeet, a 4th year Computer Science Student majoring in Ai-Ml. Currently working as a Fullstack Developer Intern in HyrecruitAi - a Ai powered interview platform. Got this opportunity in september form a good friend of mine, it is a remote job so yeah there is no problem for commutating can do my thing from home only 🙂",
    date: "2024-03-15",
    readTime: "5 min read",
    category: "Life Experience",
    image: "https://plus.unsplash.com/premium_photo-1680883415362-238794b19dde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWVzdGhldGljfGVufDB8fDB8fHww"
  },
  {
    id: 4,
    slug: "sdfgsfdgddfgs",
    title: "Taking The First Step - Signing in to Life",
    excerpt: "Hey there, I am Debojeet, a 4th year Computer Science Student majoring in Ai-Ml. Currently working as a Fullstack Developer Intern in HyrecruitAi - a Ai powered interview platform. Got this opportunity in september form a good friend of mine, it is a remote job so yeah there is no problem for commutating can do my thing from home only 🙂",
    date: "2024-03-15",
    readTime: "5 min read",
    category: "Travell",
    image: "https://plus.unsplash.com/premium_photo-1680883415362-238794b19dde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWVzdGhldGljfGVufDB8fDB8fHww"
  },
]

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = React.useState("")

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex flex-col gap-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='space-y-2'
        >
          <h1 className="text-5xl font-thin tracking-tight">Explore My Blogs</h1>
          <p className="text-muted-foreground">Dive into my latest blog posts for fresh perspectives and insights on technology, life, and more.</p>
        </motion.div>


        {/* Search */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='space-y-2'
        >
          <div className="relative w-full">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search Blogs..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              />
          </div>
        </motion.div>

        {/* Blog Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className='space-y-2'
        >
          <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
            {Blogs.map((blog) => (
              <Card key={blog.id} className="group hover:shadow-lg transition-all duration-300 bg-stone-950">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={200}
                    height={180}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2">
                    <Button variant="secondary" size="sm" className='rounded-xl px-6'>
                      {blog.category}
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                    {blog.title}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(blog.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {blog.readTime}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className='w-full flex flex-col justify-center items-start'>
                    <p className="text-muted-foreground line-clamp-2">{blog.excerpt}</p>
                    <Link href={`/blogs/${blog.slug}`}>
                      <Button variant="link" className="mt-4 p-0">
                        Read more →
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
"use client"

import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, Clock, Calendar, ExternalLink } from "lucide-react"
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {blogData} from './data/blogData'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const PREDEFINED_CATEGORIES = [
  'Life Experience', 
  'Technology', 
  'Travel', 
]

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  // Get unique categories
  const existingCategories = [...new Set(blogData.map(blog => blog.category))]

  // Filter blogs based on search query and selected category
  const filteredBlogs = blogData.filter(blog => 
    // Filter by search query
    (blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.content[0].paragraph.toLowerCase().includes(searchQuery.toLowerCase())) &&
    // Filter by category (if selected)
    (selectedCategory === "all" || blog.category === selectedCategory)
  )

  return (
    <div className="max-w-5xl mx-auto px-4 mt-[2rem] md:mt-[4rem]">
      <div className="flex flex-col gap-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-2"
        >
          <h1 className="text-5xl font-thin tracking-tight">Featured Blogs</h1>
          <p className="text-muted-foreground">
            Dive into my latest blog posts for fresh perspectives and insights
            on technology, life, and more.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-2 flex items-center gap-4 w-full"
        >
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search Blogs..."
              className="pl-10 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {PREDEFINED_CATEGORIES.map((category) => (
                <SelectItem
                  key={category}
                  value={category}
                  disabled={!existingCategories.includes(category)}
                >
                  {category}{" "}
                  <span className="italic text-[0.5rem]">
                    {!existingCategories.includes(category) ? "No data" : ""}
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="space-y-2"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredBlogs.map((blog) => (
              <Card
                key={blog.id}
                className="group hover:shadow-lg transition-all duration-300 bg-stone-950"
              >
                <div className="bg-gradient-to-br from-stone-400 to-stone-800 aspect-video relative overflow-hidden rounded-t-lg">
                  {blog.coverImage && (
                    <Image
                      src={blog.coverImage}
                      alt={blog.title}
                      width={200}
                      height={180}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                  <div className="absolute top-2 right-2">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="rounded-xl px-6"
                    >
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
                      {blog.readingTime}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="w-full flex flex-col justify-center items-start">
                    <p className="text-muted-foreground line-clamp-2">
                      {blog.content[0].paragraph}
                    </p>
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

        {/* Medium Blogs Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="bg-gradient-to-br from-stone-500/20 to-transparent rounded-2xl p-8 border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Want More Insights?
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Explore a wider range of articles and in-depth discussions on
              technology, software development, and personal experiences on my
              Medium profile.
            </p>
            <Button
              variant="outline"
              className="rounded-xl hover:bg-primary/10 transition-colors"
              asChild
            >
              <a
                href="https://medium.com/@debojeetkarmakar2004"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4 text-primary" />
                Visit My Medium
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
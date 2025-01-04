"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Clock, Tag } from 'lucide-react';
import {BlogPostProps} from '../../data/blogData';

export function Blogposts({ blogpost }: { blogpost: BlogPostProps }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-5xl mx-auto px-4 py-8"
    >
      {/* Header */}
      <div className="space-y-6 mb-12">
        <div className="relative w-full mb-12 rounded-lg overflow-hidden bg-gray-200/20 h-[200px]" />

        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          {blogpost.title}
        </h1>
        <div className="flex flex-wrap gap-4 text-muted-foreground">
          <div className="flex items-center gap-2">
            {blogpost.category && (
              <div className="flex items-center gap-2">
                <span className="text-sm">Category: {blogpost.category}</span>
              </div>
            )}
          </div>
          <div className="flex items-center gap-2">
            <CalendarDays className="w-4 h-4" />
            <span>{blogpost.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{blogpost.readingTime} read</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {blogpost.tags.map((tags) => (
              <Badge key={tags} variant="secondary">
                <Tag className="w-3 h-3 mr-1" />
                {tags}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none flex flex-col gap-6">
        <div className="w-full mx-auto">
            {blogpost.content.map((content, index) => (
            <div key={index} className="space-y-8 mb-12">
              {content.img1 && (
              <div className="relative w-full min-h-[700px] rounded-lg overflow-hidden">
                <Image
                src={content.img1}
                alt={blogpost.title}
                fill
                className="object-cover"
                priority={index === 0}
                />
              </div>
              )}
              <div className="space-y-4 text-lg leading-relaxed">
              <p className="text-gray-800 dark:text-gray-200">{content.paragraph}</p>
              </div>
              {content.img2 && (
              <div className="relative w-full min-h-[700px] rounded-lg overflow-hidden">
                <Image
                src={content.img2}
                alt={blogpost.title}
                fill
                className="object-cover"
                />
              </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
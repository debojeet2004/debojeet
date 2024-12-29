"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Clock, Tag } from 'lucide-react';

interface BlogPostProps {
  post: {
    title: string;
    date: string;
    readingTime: string;
    tags: string[];
    category: string; // Added casestudy field
    content: string;
    coverImage: string;
  };
}

export function BlogPost({ post }: BlogPostProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-5xl mx-auto px-4 py-8"
    >
      {/* Header */}
      <div className="space-y-6 mb-12">
        <div className="relative w-full mb-12 rounded-lg overflow-hidden bg-gray-200/20 h-[200px]"/>
        
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">{post.title}</h1>
        <div className="flex flex-wrap gap-4 text-muted-foreground">
          <div className="flex items-center gap-2">
            {post.category && (
              <div className="flex items-center gap-2">
              <span className="text-sm">Category: {post.category}</span>
              </div>
            )}
          </div>
          <div className="flex items-center gap-2">
            <CalendarDays className="w-4 h-4" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{post.readingTime} read</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tags) => (
              <Badge key={tags} variant="secondary">
                <Tag className="w-3 h-3 mr-1" />
                {tags}
              </Badge>
            ))}
          </div>
        </div>


      </div>

      {/* Content */}
      <article className="prose prose-lg dark:prose-invert max-w-none flex flex-col gap-6">
        <div className="w-full mx-auto">
          {post.content}
        </div>
        <div className="relative rounded-lg overflow-hidden">
          <Image
            src={post.coverImage}
            alt="Blog cover"
            width={1920}
            height={1080}
            className="object-contain w-full h-auto"
            priority
          />
        </div>
        <div className="w-full mx-auto">
          {post.content}
        </div>
      </article>

    </motion.div>
  );
}
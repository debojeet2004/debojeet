"use client";
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { blogData, BlogPostProps } from '../data/blogData';
import { Blogposts } from './_components/blogPost';

export default function BlogPageRenderer() {
    const params = useParams();
    const [blogPost, setBlogPost] = useState<BlogPostProps | null>(null);

    useEffect(() => {
        // Safely extract the slug from the dynamic route
        if (params.blogsid && params.blogsid.length > 0) {
            const slug = params.blogsid[params.blogsid.length - 1];
            // console.log("slug",slug)

            // Find the corresponding blog post
            const foundBlogPost = blogData.find(blog => blog.slug === slug);
            // console.log("foundBlogPost",foundBlogPost)

            // Update state
            setBlogPost(foundBlogPost || null);
        }
    }, [params]);

    // Handle loading state
    // if (!blogPost) {
    //     return <div>Loading...</div>;
    // }
    if (!blogPost) {
        return <div>Blog not found</div>;
    }

    // Render the blog post
    return <Blogposts blogpost={blogPost} />;
}


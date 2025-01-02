import { Blogposts } from "./_components/blogPost";
import { blogData } from "../data/blogData";

export default function BlogPage({ params }: { params: { blogsid: string[] } }) {
  const slug = params.blogsid[params.blogsid.length - 1];
  const blogPost = blogData.find(blog => blog.slug === slug);
  if (!blogPost) {
    return <div>Blog not found</div>;
  }
  return <Blogposts blogpost={blogPost} />;
}

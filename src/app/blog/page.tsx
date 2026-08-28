import { Metadata } from "next";
import BlogClient from "@/src/components/BlogClient";
import { getBlogs } from "@/src/actions/blog";

export const metadata: Metadata = {
  title: "Blog – Helper Buddy",
  description:
    "Discover insights, trends, and stories from our experts across technology, lifestyle, health, and sustainability.",
};

export const revalidate = 120; // ISR: revalidate every 2 minutes

export default async function BlogPage() {
  const data = await getBlogs();

  const posts = data?.success && data.blogs
    ? data.blogs.map((blog: any) => ({
        ...blog,
        // Serialize dates to ISO strings for client component
        publishedAt: blog.publishedAt instanceof Date ? blog.publishedAt.toISOString() : String(blog.publishedAt),
        createdAt: blog.createdAt instanceof Date ? blog.createdAt.toISOString() : String(blog.createdAt),
        updatedAt: blog.updatedAt instanceof Date ? blog.updatedAt.toISOString() : String(blog.updatedAt),
      }))
    : [];

  return <BlogClient initialPosts={posts} />;
}

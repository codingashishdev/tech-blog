import type { Metadata } from "next"
import BlogPostClientPage from "./BlogPostClientPage"

export const metadata: Metadata = {
  title: "Blog Post | CodeCraft",
  description: "Read this insightful article about coding and technology",
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return <BlogPostClientPage params={params} />
}


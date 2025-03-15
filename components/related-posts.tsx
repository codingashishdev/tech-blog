import Link from "next/link"
import Image from "next/image"

interface RelatedPostsProps {
  currentSlug: string
}

export function RelatedPosts({ currentSlug }: RelatedPostsProps) {
  // In a real app, you would fetch related posts based on the current post
  const relatedPosts = [
    {
      title: "Understanding WebSockets in Modern Web Applications",
      slug: "understanding-websockets",
      coverImage: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Building a Markdown Blog with Next.js and MDX",
      slug: "markdown-blog-nextjs-mdx",
      coverImage: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Authentication in Next.js Applications",
      slug: "authentication-nextjs-applications",
      coverImage: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {relatedPosts.map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
          <div className="relative aspect-video overflow-hidden rounded-lg mb-2">
            <Image
              src={post.coverImage || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <h3 className="font-medium group-hover:text-primary transition-colors">{post.title}</h3>
        </Link>
      ))}
    </div>
  )
}


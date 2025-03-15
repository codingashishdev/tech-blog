import type { Metadata } from "next"
import { PostCard } from "@/components/post-card"
import { CategoryTabs } from "@/components/category-tabs"

export const metadata: Metadata = {
  title: "Blog | CodeCraft",
  description: "Browse all blog posts about coding and technology",
}

export default function BlogPage() {
  return (
    <div className="container px-4 py-6 md:py-10">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Blog</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Explore articles, tutorials, and insights on coding, web development, and technology.
        </p>
      </div>

      <div className="mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <CategoryTabs />
          <div className="relative">
            <input
              type="search"
              placeholder="Search posts..."
              className="pl-9 pr-4 py-2 text-sm rounded-md border border-input bg-background"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <PostCard
          title="Building a Real-time Chat Application with Next.js and Socket.io"
          excerpt="Learn how to create a fully functional real-time chat application using Next.js, Socket.io, and Tailwind CSS. This step-by-step guide covers everything from setup to deployment."
          date="March 1, 2025"
          category="Tutorials"
          slug="building-realtime-chat-nextjs-socketio"
          coverImage="/placeholder.svg?height=400&width=600"
        />
        <PostCard
          title="Understanding React Server Components"
          excerpt="Dive deep into React Server Components and learn how they can improve your application's performance and user experience."
          date="February 28, 2025"
          category="React"
          slug="understanding-react-server-components"
          coverImage="/placeholder.svg?height=400&width=600"
        />
        <PostCard
          title="Getting Started with TypeScript in 2025"
          excerpt="A comprehensive guide to TypeScript for beginners, covering all the essential concepts and best practices."
          date="February 25, 2025"
          category="TypeScript"
          slug="getting-started-typescript-2025"
          coverImage="/placeholder.svg?height=400&width=600"
        />
        <PostCard
          title="Optimizing Images in Next.js Applications"
          excerpt="Learn how to effectively optimize images in your Next.js applications for better performance and user experience."
          date="February 20, 2025"
          category="Performance"
          slug="optimizing-images-nextjs-applications"
          coverImage="/placeholder.svg?height=400&width=600"
        />
        <PostCard
          title="Building a Custom Authentication System with Next.js"
          excerpt="A step-by-step guide to implementing a secure authentication system in your Next.js application."
          date="February 15, 2025"
          category="Security"
          slug="custom-authentication-nextjs"
          coverImage="/placeholder.svg?height=400&width=600"
        />
        <PostCard
          title="Mastering CSS Grid Layout"
          excerpt="Everything you need to know about CSS Grid Layout to create complex and responsive web layouts."
          date="February 10, 2025"
          category="CSS"
          slug="mastering-css-grid-layout"
          coverImage="/placeholder.svg?height=400&width=600"
        />
      </div>

      <div className="mt-12 flex justify-center">
        <nav className="flex items-center gap-1">
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 bg-primary text-primary-foreground shadow hover:bg-primary/90">
            1
          </button>
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 hover:bg-accent hover:text-accent-foreground">
            2
          </button>
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 hover:bg-accent hover:text-accent-foreground">
            3
          </button>
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 hover:bg-accent hover:text-accent-foreground">
            Next
          </button>
        </nav>
      </div>
    </div>
  )
}


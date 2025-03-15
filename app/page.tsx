import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { FeaturedPost } from "@/components/featured-post"
import { PostCard } from "@/components/post-card"

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4 md:text-5xl">Welcome to CodeCraft</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Exploring the art and science of coding, one byte at a time. Tutorials, insights, and adventures in
          technology.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Browse All Posts
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            About Me
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold tracking-tight mb-6">Featured Post</h2>
        <FeaturedPost
          title="Building a Real-time Chat Application with Next.js and Socket.io"
          excerpt="Learn how to create a fully functional real-time chat application using Next.js, Socket.io, and Tailwind CSS. This step-by-step guide covers everything from setup to deployment."
          date="March 1, 2025"
          category="Tutorials"
          slug="building-realtime-chat-nextjs-socketio"
          coverImage="/placeholder.svg?height=400&width=800"
        />
      </section>

      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold tracking-tight">Latest Posts</h2>
          <Link href="/blog" className="text-primary hover:underline inline-flex items-center">
            View all
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <PostCard
            title="Understanding React Server Components"
            excerpt="Dive deep into React Server Components and learn how they can improve your application's performance and user experience."
            date="February 28, 2025"
            category="React"
            slug="understanding-react-server-components"
            coverImage="/placeholder.svg?height=200&width=400"
          />
          <PostCard
            title="Getting Started with TypeScript in 2025"
            excerpt="A comprehensive guide to TypeScript for beginners, covering all the essential concepts and best practices."
            date="February 25, 2025"
            category="TypeScript"
            slug="getting-started-typescript-2025"
            coverImage="/placeholder.svg?height=200&width=400"
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold tracking-tight mb-6">Newsletter</h2>
        <div className="p-6 rounded-lg border bg-card text-card-foreground shadow">
          <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
          <p className="text-muted-foreground mb-4">
            Subscribe to receive updates on new articles, tutorials, and tech insights.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              required
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}


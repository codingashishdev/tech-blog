import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export const metadata: Metadata = {
  title: "About Me | CodeCraft",
  description: "Learn more about the author of CodeCraft blog",
}

export default function AboutPage() {
  return (
    <div className="container px-4 py-6 md:py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-6">About Me</h1>

        <div className="grid gap-8 md:grid-cols-[2fr_1fr] items-start mb-12">
          <div className="prose dark:prose-invert max-w-none">
            <p>
              Hello! I'm Alex Chen, a full-stack developer with over 8 years of experience building web applications. I
              specialize in React, Next.js, Node.js, and TypeScript.
            </p>
            <p>
              I started CodeCraft as a way to share my knowledge and experiences with the developer community. My goal
              is to create high-quality, practical content that helps developers of all skill levels improve their
              craft.
            </p>
            <p>
              When I'm not coding or writing, you can find me hiking, reading science fiction, or experimenting with new
              technologies. I'm passionate about open source and regularly contribute to various projects.
            </p>
            <h2>My Journey</h2>
            <p>
              I began my programming journey in college, where I studied Computer Science. After graduation, I worked at
              several startups before joining a large tech company as a senior developer. In 2021, I decided to go
              freelance to have more flexibility and time to work on personal projects like this blog.
            </p>
            <p>
              Throughout my career, I've worked on a wide range of projects, from e-commerce platforms to real-time
              collaboration tools. I've also mentored junior developers and given talks at local meetups and
              conferences.
            </p>
            <h2>My Tech Stack</h2>
            <p>Here are some of the technologies I work with regularly:</p>
            <ul>
              <li>Frontend: React, Next.js, TypeScript, Tailwind CSS</li>
              <li>Backend: Node.js, Express, NestJS, PostgreSQL, MongoDB</li>
              <li>DevOps: Docker, AWS, Vercel, GitHub Actions</li>
              <li>Testing: Jest, React Testing Library, Cypress</li>
            </ul>
            <h2>Let's Connect</h2>
            <p>
              I'm always open to new opportunities, collaborations, or just chatting about tech. Feel free to reach out
              to me through any of the channels listed below.
            </p>
          </div>

          <div className="space-y-6">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=400" alt="Alex Chen" fill className="object-cover" />
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Connect with me</h3>
              <div className="space-y-2">
                <Link
                  href="https://twitter.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary"
                >
                  <Twitter className="h-5 w-5" />
                  <span>@alexchen</span>
                </Link>
                <Link
                  href="https://github.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary"
                >
                  <Github className="h-5 w-5" />
                  <span>github.com/alexchen</span>
                </Link>
                <Link
                  href="https://linkedin.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary"
                >
                  <Linkedin className="h-5 w-5" />
                  <span>linkedin.com/in/alexchen</span>
                </Link>
                <Link
                  href="mailto:alex@codecraft.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary"
                >
                  <Mail className="h-5 w-5" />
                  <span>alex@codecraft.com</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 rounded-lg border bg-card text-card-foreground shadow">
            <h3 className="text-xl font-semibold mb-2">Writing</h3>
            <p className="text-muted-foreground mb-4">
              I write about web development, programming best practices, and career advice for developers.
            </p>
            <Link href="/blog" className="text-primary hover:underline">
              Read my articles
            </Link>
          </div>

          <div className="p-6 rounded-lg border bg-card text-card-foreground shadow">
            <h3 className="text-xl font-semibold mb-2">Speaking</h3>
            <p className="text-muted-foreground mb-4">
              I speak at conferences and meetups about frontend development, React, and developer productivity.
            </p>
            <Link href="/speaking" className="text-primary hover:underline">
              View past talks
            </Link>
          </div>

          <div className="p-6 rounded-lg border bg-card text-card-foreground shadow">
            <h3 className="text-xl font-semibold mb-2">Consulting</h3>
            <p className="text-muted-foreground mb-4">
              I offer consulting services for companies looking to improve their frontend architecture or development
              processes.
            </p>
            <Link href="/contact" className="text-primary hover:underline">
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}


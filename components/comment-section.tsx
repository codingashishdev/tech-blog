"use client"

import type React from "react"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

interface Comment {
  id: number
  author: string
  authorInitials: string
  date: string
  content: string
}

interface CommentSectionProps {
  postSlug: string
}

export function CommentSection({ postSlug }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: "Jane Smith",
      authorInitials: "JS",
      date: "March 1, 2025",
      content:
        "Great article! I've been looking for a comprehensive guide on building real-time chat applications with Next.js. This is exactly what I needed.",
    },
    {
      id: 2,
      author: "John Doe",
      authorInitials: "JD",
      date: "March 1, 2025",
      content:
        "I followed this tutorial and got my chat app working in no time. One question though - how would you implement private messaging between users?",
    },
    {
      id: 3,
      author: "Sarah Johnson",
      authorInitials: "SJ",
      date: "March 2, 2025",
      content: "Thanks for sharing this! The step-by-step instructions were very clear and easy to follow.",
    },
  ])

  const [newComment, setNewComment] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.trim()) return

    const comment: Comment = {
      id: comments.length + 1,
      author: "Guest User",
      authorInitials: "GU",
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      content: newComment,
    }

    setComments([...comments, comment])
    setNewComment("")
  }

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold mb-6">Comments ({comments.length})</h3>

      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Leave a comment..."
            className="w-full p-3 min-h-[100px] rounded-md border border-input bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            required
          />
        </div>
        <Button type="submit">Post Comment</Button>
      </form>

      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-4">
            <Avatar>
              <AvatarImage src="" alt={comment.author} />
              <AvatarFallback>{comment.authorInitials}</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-medium">{comment.author}</span>
                <span className="text-sm text-muted-foreground">{comment.date}</span>
              </div>
              <p className="text-sm">{comment.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


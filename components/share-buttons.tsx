"use client"

import { Twitter, Facebook, Linkedin, Link } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

interface ShareButtonsProps {
  url: string
  title: string
}

export function ShareButtons({ url, title }: ShareButtonsProps) {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(url)
    toast({
      title: "Link copied",
      description: "The link has been copied to your clipboard.",
    })
  }

  return (
    <div className="flex items-center gap-2">
      <a
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full p-2 text-muted-foreground hover:text-primary hover:bg-accent"
      >
        <Twitter className="h-4 w-4" />
        <span className="sr-only">Share on Twitter</span>
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full p-2 text-muted-foreground hover:text-primary hover:bg-accent"
      >
        <Facebook className="h-4 w-4" />
        <span className="sr-only">Share on Facebook</span>
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full p-2 text-muted-foreground hover:text-primary hover:bg-accent"
      >
        <Linkedin className="h-4 w-4" />
        <span className="sr-only">Share on LinkedIn</span>
      </a>
      <button
        onClick={handleCopyLink}
        className="rounded-full p-2 text-muted-foreground hover:text-primary hover:bg-accent"
      >
        <Link className="h-4 w-4" />
        <span className="sr-only">Copy link</span>
      </button>
    </div>
  )
}


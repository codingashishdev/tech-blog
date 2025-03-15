import Link from "next/link"
import Image from "next/image"
import { Calendar, Tag } from "lucide-react"

interface PostCardProps {
  title: string
  excerpt: string
  date: string
  category: string
  slug: string
  coverImage: string
}

export function PostCard({ title, excerpt, date, category, slug, coverImage }: PostCardProps) {
  return (
    <div className="rounded-lg border overflow-hidden">
      <div className="relative aspect-[2/1]">
        <Image src={coverImage || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
          <div className="flex items-center">
            <Calendar className="mr-1 h-3 w-3" />
            {date}
          </div>
          <div className="flex items-center">
            <Tag className="mr-1 h-3 w-3" />
            <Link href={`/blog/category/${category.toLowerCase()}`} className="text-primary hover:underline">
              {category}
            </Link>
          </div>
        </div>
        <h3 className="text-lg font-semibold mb-2 line-clamp-2">
          <Link href={`/blog/${slug}`} className="hover:text-primary transition-colors">
            {title}
          </Link>
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{excerpt}</p>
        <Link href={`/blog/${slug}`} className="text-sm text-primary hover:underline">
          Read More
        </Link>
      </div>
    </div>
  )
}


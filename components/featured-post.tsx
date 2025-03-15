import Link from "next/link"
import Image from "next/image"
import { Calendar, Tag } from "lucide-react"

interface FeaturedPostProps {
  title: string
  excerpt: string
  date: string
  category: string
  slug: string
  coverImage: string
}

export function FeaturedPost({ title, excerpt, date, category, slug, coverImage }: FeaturedPostProps) {
  return (
    <div className="rounded-lg border overflow-hidden">
      <div className="relative aspect-[2/1]">
        <Image src={coverImage || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
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
        <h3 className="text-xl font-bold mb-2">
          <Link href={`/blog/${slug}`} className="hover:text-primary transition-colors">
            {title}
          </Link>
        </h3>
        <p className="text-muted-foreground mb-4">{excerpt}</p>
        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          Read More
        </Link>
      </div>
    </div>
  )
}


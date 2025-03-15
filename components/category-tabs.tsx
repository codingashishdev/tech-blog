"use client"

import { useState } from "react"

export function CategoryTabs() {
  const [activeCategory, setActiveCategory] = useState("All")
  const categories = ["All", "React", "Next.js", "TypeScript", "Tutorials"]

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-4 py-2 text-sm rounded-full transition-colors ${
            activeCategory === category
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}


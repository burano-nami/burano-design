// types/blog.ts
export type Blog = {
  id: string
  title: string
  eyecatch?: {
    url: string
    height?: number
    width?: number
  }
  content?: string
  publishedAt?: string
}
export interface Tool {
  id: string
  name: string
  url: string
  description: string
  tags: string[]
  aliases: string[]
  scenarios?: string[]
  free?: boolean
  requiresLogin?: boolean
  priority: number
}

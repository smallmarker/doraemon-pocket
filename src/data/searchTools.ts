import toolsData from './tools.json'
import type { Tool } from '../types/tool'

const tools = toolsData as Tool[]

function normalise(value: string) {
  return value.toLocaleLowerCase().replaceAll(/\s+/g, '')
}

export function searchTools(keyword: string): Tool[] {
  const query = normalise(keyword)
  if (!query) return []

  return tools
    .map((tool) => {
      const fields = [tool.name, tool.description, ...tool.tags, ...tool.aliases, ...(tool.scenarios ?? [])]
      const score = fields.reduce((total, field) => total + (normalise(field).includes(query) ? 1 : 0), 0)
      return { tool, score }
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || b.tool.priority - a.tool.priority)
    .slice(0, 8)
    .map(({ tool }) => tool)
}

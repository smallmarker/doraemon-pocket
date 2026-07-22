import type { Tool } from '../types/tool'

export function ToolResultCard({ tool }: { tool: Tool }) {
  const tags = tool.tags.slice(0, 3)
  return (
    <a className="tool-card" href={tool.url} target="_blank" rel="noopener noreferrer">
      <div className="tool-icon" aria-hidden="true">{tool.name.slice(0, 1)}</div>
      <div className="tool-content">
        <h2>{tool.name}</h2>
        <p>{tool.description}</p>
        <div className="tool-tags">
          {tags.map((tag) => <span key={tag}>{tag}</span>)}
          {tool.free && <span className="status-tag">免费</span>}
          {tool.requiresLogin && <span className="status-tag">需登录</span>}
        </div>
        {tool.scenarios?.[0] && <small className="scenario">适合：{tool.scenarios[0]}</small>}
      </div>
      <span className="open-tool">打开工具 <span aria-hidden="true">↗</span></span>
    </a>
  )
}

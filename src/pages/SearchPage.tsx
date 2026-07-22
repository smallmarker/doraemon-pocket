import { EmptyState } from '../components/EmptyState'
import { PocketSearch } from '../components/PocketSearch'
import { ToolResultCard } from '../components/ToolResultCard'
import { searchTools } from '../data/searchTools'

export function SearchPage({ keyword, onSearch }: { keyword: string; onSearch: (keyword: string) => void }) {
  const results = searchTools(keyword)
  return (
    <main className="results-page">
      <header className="results-header">
        <div className="results-header-content">
          <a className="brand" href={import.meta.env.BASE_URL}>Doraemon Pocket</a>
          <div className="results-search-wrap">
            <PocketSearch initialKeyword={keyword} onSearch={onSearch} />
          </div>
          <img
            className="results-doodle"
            src={`${import.meta.env.BASE_URL}assets/doraemon-results-doodle-wide.png`}
            alt=""
            aria-hidden="true"
          />
        </div>
      </header>
      <section className="results-content">
        <p className="result-summary">“{keyword}” 的相关工具 · {results.length} 个结果</p>
        {results.length > 0
          ? <div className="result-list">{results.map((tool) => <ToolResultCard key={tool.id} tool={tool} />)}</div>
          : <EmptyState />}
      </section>
    </main>
  )
}

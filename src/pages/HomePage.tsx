import { DoraemonHero } from '../components/DoraemonHero'
import { PocketSearch } from '../components/PocketSearch'

export function HomePage({ onSearch }: { onSearch: (keyword: string) => void }) {
  return (
    <main className="home-page">
      <header className="home-header"><a href={import.meta.env.BASE_URL}>Doraemon Pocket</a></header>
      <section className="home-hero">
        <div className="home-search-area">
          <DoraemonHero />
          <PocketSearch autoFocus onSearch={onSearch} />
        </div>
      </section>
    </main>
  )
}

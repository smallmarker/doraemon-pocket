import { HomePage } from './pages/HomePage'
import { SearchPage } from './pages/SearchPage'

function navigateToSearch(keyword: string) {
  window.location.assign(`${import.meta.env.BASE_URL}search?q=${encodeURIComponent(keyword)}`)
}

export default function App() {
  const redirectPath = new URLSearchParams(window.location.search).get('redirect')
  const routeUrl = redirectPath
    ? new URL(redirectPath, window.location.origin)
    : new URL(window.location.href)
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, '')
  const appPath = routeUrl.pathname.replace(basePath, '') || '/'
  const isSearchPage = appPath === '/search'
  const keyword = routeUrl.searchParams.get('q')?.trim() ?? ''
  return isSearchPage
    ? <SearchPage keyword={keyword} onSearch={navigateToSearch} />
    : <HomePage onSearch={navigateToSearch} />
}

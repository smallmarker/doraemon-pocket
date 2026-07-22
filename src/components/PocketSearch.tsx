import { FormEvent, useEffect, useRef, useState } from 'react'

interface PocketSearchProps {
  initialKeyword?: string
  autoFocus?: boolean
  onSearch: (keyword: string) => void
}

export function PocketSearch({ initialKeyword = '', autoFocus = false, onSearch }: PocketSearchProps) {
  const [keyword, setKeyword] = useState(initialKeyword)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => setKeyword(initialKeyword), [initialKeyword])
  useEffect(() => {
    if (autoFocus) inputRef.current?.focus()
  }, [autoFocus])

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const trimmedKeyword = keyword.trim()
    if (trimmedKeyword) onSearch(trimmedKeyword)
  }

  return (
    <form className="pocket-search" onSubmit={submit} role="search">
      <label className="sr-only" htmlFor="tool-search">搜索工具</label>
      <input
        id="tool-search"
        ref={inputRef}
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
        placeholder="想找什么工具？让我来翻翻口袋试一试"
      />
      {keyword && <button className="clear-button" type="button" onClick={() => setKeyword('')} aria-label="清空搜索">×</button>}
      <button className="search-button" type="submit">搜索</button>
    </form>
  )
}

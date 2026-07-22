export function DoraemonHero() {
  return (
    <div className="doraemon-hero" aria-label="哆啦A梦人物区域">
      <img
        className="doraemon-image"
        src={`${import.meta.env.BASE_URL}assets/doraemon-search-doodle-wide.png`}
        alt="哆啦A梦趴在口袋搜索框上方"
      />
    </div>
  )
}

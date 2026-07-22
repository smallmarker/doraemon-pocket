export function EmptyState() {
  return (
    <section className="empty-state">
      <img
        className="empty-state-image"
        src={`${import.meta.env.BASE_URL}assets/doraemon-empty-results-icon.png`}
        alt=""
        aria-hidden="true"
      />
      <h2>口袋里暂时没有找到这个工具。</h2>
      <p>
        欢迎到{' '}
        <a
          href="https://github.com/smallmarker/doraemon-pocket/issues/new"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub 提交一个工具推荐
        </a>
        。
      </p>
    </section>
  )
}

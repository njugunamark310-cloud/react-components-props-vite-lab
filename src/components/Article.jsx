function Article({
  title,
  date = "January 1, 1970",
  preview,
}) {
  return (
    <article className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <h3 className="mb-3 text-xl font-bold text-slate-900 transition group-hover:text-blue-600">
        {title}
      </h3>

      <small className="text-xs font-medium uppercase tracking-wider text-slate-400">
        {date}
      </small>

      <p className="mt-4 text-sm leading-7 text-slate-600">
        {preview}
      </p>

      <a
        href="#"
        className="mt-5 inline-block text-sm font-semibold text-blue-600 hover:text-blue-800"
      >
        Read article →
      </a>
    </article>
  );
}

export default Article;
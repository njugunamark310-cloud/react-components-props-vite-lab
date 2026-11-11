function Header({ name }) {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
          {name}
        </h1>

        <nav className="flex gap-6 text-sm font-medium text-slate-600">
          <a href="#" className="transition hover:text-blue-600">
            Home
          </a>
          <a href="#" className="transition hover:text-blue-600">
            Articles
          </a>
          <a href="#" className="transition hover:text-blue-600">
            About
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
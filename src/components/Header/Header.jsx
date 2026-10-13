function Header({ title }) {
  return (
    <header className="px-6 py-4 bg-white border-b border-slate-200">
      <h1 className="text-xl font-semibold text-slate-800">{title}</h1>
    </header>
  )
}

export default Header
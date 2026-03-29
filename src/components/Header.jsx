// Top bar: site name + menu to switch sections (single page app)
function Header({ activePage, onNavigate }) {
  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'events', label: 'Events' },
    { id: 'register', label: 'Register' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <header className="border-b border-indigo-100 bg-white shadow-sm">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-indigo-700">EventHub</h1>
        <nav>
          <ul className="flex flex-wrap gap-2 sm:gap-4">
            {links.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => onNavigate(link.id)}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-indigo-50 hover:text-indigo-800 ${
                    activePage === link.id
                      ? 'bg-indigo-100 text-indigo-800'
                      : 'text-gray-700'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

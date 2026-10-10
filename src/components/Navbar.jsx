import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import { Menu, X } from 'lucide-react'

const links = [{ to: '/', label: 'Home' }]

const linkClass = ({ isActive }) =>
  `rounded-md px-3 py-2 text-sm font-medium transition hover:text-white ${
    isActive ? 'text-white' : 'text-slate-400'
  }`

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="border-b border-slate-800 bg-slate-950">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="text-lg font-bold tracking-tight text-white">
          JossyWeb
        </Link>

        <ul className="hidden items-center gap-1 sm:flex">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end className={linkClass}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((open) => !open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="rounded-md p-2 text-slate-300 transition hover:text-white sm:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-slate-800 px-4 py-3 sm:hidden">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end
                onClick={() => setOpen(false)}
                className={linkClass}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}

export default Navbar

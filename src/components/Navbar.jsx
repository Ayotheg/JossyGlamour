import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import { Menu, X } from 'lucide-react'
import { site } from '../config/site.js'

const links = [{ to: '/', label: 'Home' }]

const linkClass = ({ isActive }) =>
  `rounded-md px-3 py-2 text-sm font-medium transition hover:text-neutral-900 ${
    isActive ? 'text-neutral-900' : 'text-neutral-500'
  }`

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="border-b border-neutral-200 bg-white">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3"
      >
        <Link to="/" aria-label={`${site.name} home`}>
          <img
            src={site.logo}
            alt={site.name}
            width="1280"
            height="677"
            className="h-12 w-auto"
          />
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
          className="rounded-md p-2 text-neutral-600 transition hover:text-neutral-900 sm:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-neutral-200 px-4 py-3 sm:hidden">
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

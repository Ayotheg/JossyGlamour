import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { Calendar, Menu, X } from 'lucide-react'
import { site } from '../config/site.js'

// Each link scrolls to a section of the home page.
const links = [
  { hash: '', label: 'Home' },
  { hash: '#services', label: 'Services' },
  { hash: '#about', label: 'About' },
  { hash: '#contact', label: 'Contact' },
]

// The hash of the last linked section whose top has passed the upper part of
// the viewport, so the highlight follows the page as it scrolls.
function currentSection() {
  const atBottom =
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight - 4
  if (atBottom) return links[links.length - 1].hash

  const line = window.innerHeight * 0.4
  let current = ''
  for (const { hash } of links) {
    if (!hash) continue
    const section = document.getElementById(hash.slice(1))
    if (section && section.getBoundingClientRect().top <= line) current = hash
  }
  return current
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const { pathname } = useLocation()
  const onHome = pathname === '/'

  useEffect(() => {
    if (!onHome) return
    const update = () => setActive(currentSection())
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [onHome])

  const renderLink = (link) => {
    const isActive = onHome && active === link.hash
    return (
      <Link
        key={link.label}
        to={`/${link.hash}`}
        onClick={() => setOpen(false)}
        aria-current={isActive ? 'true' : undefined}
        className={`transition-colors duration-(--dur-fast) hover:text-pink-500 ${
          isActive ? 'text-pink-500' : 'text-charcoal'
        }`}
      >
        {link.label}
      </Link>
    )
  }

  const bookButton = (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="flex shrink-0 items-center justify-center gap-2 rounded-pill bg-pink-500 px-6.5 py-3.5 font-ui text-ui font-semibold whitespace-nowrap text-white shadow-cta transition-[background-color,box-shadow] duration-(--dur-fast) hover:bg-black hover:shadow-none"
    >
      <Calendar className="size-3.75" strokeWidth={2} aria-hidden="true" />
      Book an Appointment
    </a>
  )

  return (
    <header className="sticky top-0 z-20 border-b border-charcoal/8 bg-white shadow-[0_1px_0_rgb(0_0_0/0.02)]">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-site items-center justify-between gap-6 px-gutter py-5"
      >
        <Link to="/" aria-label={`${site.name} home`} className="flex items-center">
          <img
            src={site.logo}
            alt={site.name}
            width="1280"
            height="677"
            className="block h-13 w-auto mix-blend-multiply"
          />
        </Link>

        <div className="hidden items-center gap-[clamp(20px,4vw,64px)] font-label text-xs font-medium tracking-[0.12em] uppercase lg:flex">
          {links.slice(0, 2).map(renderLink)}
          <div className="flex gap-[clamp(16px,2vw,28px)]">
            {links.slice(2).map(renderLink)}
          </div>
        </div>

        <div className="hidden lg:block">{bookButton}</div>

        <button
          type="button"
          onClick={() => setOpen((open) => !open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="cursor-pointer rounded-md p-2 text-charcoal transition-colors duration-(--dur-fast) hover:text-pink-500 lg:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full flex flex-col gap-6 border-t border-charcoal/8 bg-white px-gutter py-6 shadow-menu lg:hidden"
        >
          <div className="flex flex-col gap-5 font-label text-xs font-medium tracking-[0.12em] uppercase">
            {links.map(renderLink)}
          </div>
          {bookButton}
        </div>
      )}
    </header>
  )
}

export default Navbar

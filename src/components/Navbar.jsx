import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { ArrowRight, Calendar } from 'lucide-react'
import { site, whatsappLink } from '../config/site.js'
import { DESKTOP_QUERY, useMediaQuery } from '../hooks/useMediaQuery.js'

// Each link scrolls to a section of the home page. Gallery only appears in
// the mobile menu.
const links = [
  { hash: '', label: 'Home' },
  { hash: '#services', label: 'Services' },
  { hash: '#about', label: 'About' },
  { hash: '#work', label: 'Gallery', mobileOnly: true },
  { hash: '#contact', label: 'Contact' },
]
const desktopLinks = links.filter((link) => !link.mobileOnly)

// The hash of the last section in `list` whose top has passed the upper part
// of the viewport, so the highlight follows the page as it scrolls.
function currentSection(list) {
  const atBottom =
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight - 4
  if (atBottom) return list[list.length - 1].hash

  const line = window.innerHeight * 0.4
  let current = ''
  for (const { hash } of list) {
    if (!hash) continue
    const section = document.getElementById(hash.slice(1))
    if (section && section.getBoundingClientRect().top <= line) current = hash
  }
  return current
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')
  const { pathname } = useLocation()
  const isDesktop = useMediaQuery(DESKTOP_QUERY)
  const onHome = pathname === '/'
  const open = menuOpen && !isDesktop

  useEffect(() => {
    if (!onHome) return
    const update = () =>
      setActive(currentSection(isDesktop ? desktopLinks : links))
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [onHome, isDesktop])

  // The mobile menu covers the page, so stop the page scrolling behind it.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const isActive = (link) => onHome && active === link.hash
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-20 border-b border-charcoal/8 bg-white shadow-[0_1px_0_rgb(0_0_0/0.02)]">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-site items-center justify-between gap-6 px-gutter py-3.5 desk:py-5"
      >
        <Link
          to="/"
          onClick={closeMenu}
          aria-label={`${site.name} home`}
          className="flex items-center"
        >
          <img
            src={site.logo}
            alt={site.name}
            width="800"
            height="432"
            className="block h-10.5 w-auto desk:h-13"
          />
        </Link>

        <div className="hidden items-center gap-[clamp(20px,4vw,64px)] font-label text-xs font-medium tracking-[0.12em] uppercase desk:flex">
          {desktopLinks.slice(0, 2).map(renderDesktopLink)}
          <div className="flex gap-[clamp(16px,2vw,28px)]">
            {desktopLinks.slice(2).map(renderDesktopLink)}
          </div>
        </div>

        <a
          href={whatsappLink('appointment')}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden shrink-0 items-center justify-center gap-2 rounded-pill bg-pink-500 px-6.5 py-3.5 font-ui text-ui font-semibold whitespace-nowrap text-white shadow-cta transition-[background-color,box-shadow] duration-(--dur-fast) hover:bg-black hover:shadow-none desk:flex"
        >
          <Calendar className="size-3.75" strokeWidth={2} aria-hidden="true" />
          Book an Appointment
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex size-11 cursor-pointer flex-col items-center justify-center gap-1.25 rounded-full border border-charcoal/18 bg-white desk:hidden"
        >
          <span
            className="h-[1.5px] w-4.5 bg-black transition-transform duration-300"
            style={{ transform: open ? 'translateY(3.25px) rotate(45deg)' : 'none' }}
          />
          <span
            className="h-[1.5px] w-4.5 bg-black transition-transform duration-300"
            style={{ transform: open ? 'translateY(-3.25px) rotate(-45deg)' : 'none' }}
          />
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full flex h-[calc(100dvh-100%)] flex-col justify-between gap-8 overflow-y-auto border-t border-charcoal/8 bg-white px-5 pt-7 pb-8"
        >
          <div className="flex flex-col">
            {links.map((link) => (
              <Link
                key={link.label}
                to={`/${link.hash}`}
                onClick={closeMenu}
                aria-current={isActive(link) ? 'true' : undefined}
                className={`flex items-center justify-between border-b border-charcoal/10 py-3.5 font-display text-[34px] font-bold tracking-[-0.03em] ${
                  isActive(link) ? 'text-pink-500' : 'text-black'
                }`}
              >
                {link.label}
                <ArrowRight className="size-4.5 text-pink-500" aria-hidden="true" />
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <a
              href={whatsappLink('appointment')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2.5 rounded-pill bg-pink-500 px-6.5 py-4.5 font-ui text-base font-semibold text-white"
            >
              <Calendar className="size-4" strokeWidth={2} aria-hidden="true" />
              Book an Appointment
            </a>
            <div className="flex flex-wrap justify-between gap-3 font-label text-[13px]">
              <a href={site.phoneHref} className="text-charcoal">
                {site.phone}
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500"
              >
                {site.instagramHandle}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )

  function renderDesktopLink(link) {
    return (
      <Link
        key={link.label}
        to={`/${link.hash}`}
        aria-current={isActive(link) ? 'true' : undefined}
        className={`transition-colors duration-(--dur-fast) hover:text-pink-500 ${
          isActive(link) ? 'text-pink-500' : 'text-charcoal'
        }`}
      >
        {link.label}
      </Link>
    )
  }
}

export default Navbar

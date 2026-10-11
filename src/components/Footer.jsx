import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { site, whatsappLink } from '../config/site.js'
import { Instagram, Tiktok } from './BrandIcons.jsx'
import Reveal from './Reveal.jsx'

const year = new Date().getFullYear()

const headingClass =
  'mb-1.5 font-display text-sm font-bold tracking-[0.04em] text-white uppercase'
const linkClass =
  'text-pink-300 transition-colors duration-(--dur-fast) hover:text-white'
const iconLinkClass =
  'flex size-10 items-center justify-center rounded-full border border-white/20 text-pink-300 transition-colors duration-(--dur-fast) hover:border-pink-500 hover:bg-pink-500 hover:text-white'

const contacts = [
  { label: `Email ${site.email}`, href: `mailto:${site.email}`, icon: Mail },
  { label: `Call ${site.phone}`, href: site.phoneHref, icon: Phone },
  {
    label: `Instagram ${site.instagramHandle}`,
    href: site.instagram,
    icon: Instagram,
    external: true,
  },
  {
    label: `TikTok ${site.tiktokHandle}`,
    href: site.tiktok,
    icon: Tiktok,
    external: true,
  },
]

function Footer() {
  return (
    <footer id="contact" className="scroll-mt-20 bg-black text-white">
      <Reveal className="mx-auto max-w-site px-gutter pt-[clamp(48px,7vw,88px)] pb-24 font-ui tab:pb-12">
        <div className="grid grid-cols-1 gap-9 pb-[clamp(40px,7vw,96px)] tab:grid-cols-2 tab:gap-12 desk:grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))]">
          <div className="flex flex-col gap-3">
            <img
              src={site.logo}
              alt={site.name}
              width="800"
              height="432"
              loading="lazy"
              className="h-16 w-auto self-start"
            />
            <p className="mt-1 max-w-70 text-[13.5px] leading-[1.7] text-pretty text-grey-300">
              {site.slogan} Custom headwear, fascinators, professional makeup,
              and personal styling for weddings, cultural events, and special
              occasions.
            </p>
          </div>

          <div className="flex flex-col gap-1.5 text-[13.5px] leading-[1.7]">
            <h2 className={headingClass}>Contact</h2>
            <span className="flex items-center gap-2 text-grey-300">
              <MapPin className="size-4 shrink-0 text-pink-300" aria-hidden="true" />
              {site.location}
            </span>
            <div className="mt-3.5 flex flex-wrap gap-2.5">
              {contacts.map(({ label, href, icon: Icon, external }) => (
                <a
                  key={href}
                  href={href}
                  aria-label={label}
                  title={label}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className={iconLinkClass}
                >
                  <Icon className="size-4.5" strokeWidth={1.75} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2 text-[13.5px] leading-[1.6] text-grey-300">
            <h2 className={headingClass}>Opening Hours</h2>
            {site.hours.map((slot) => (
              <span key={slot.days}>
                <span className="font-semibold text-white">{slot.days}:</span>{' '}
                {slot.time}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-2.5 text-[13.5px] leading-[1.7]">
            <h2 className={headingClass}>Private Consultations</h2>
            <span className="text-pretty text-grey-300">
              One-on-one personal styling consultations and outfit planning for
              weddings and traditional events, including multiple outfit
              changes.
            </span>
            <a
              href={whatsappLink('consultation')}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 self-start font-label text-xs font-semibold tracking-widest uppercase ${linkClass}`}
            >
              Book a Consultation
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="border-t border-line-dark pt-7 font-meta text-[12.5px] text-grey-300">
          &copy; {year} {site.name}. All rights reserved.
        </div>
      </Reveal>
    </footer>
  )
}

export default Footer

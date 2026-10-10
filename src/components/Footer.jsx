import { Mail, MapPin, Phone } from 'lucide-react'
import { site } from '../config/site.js'

const year = new Date().getFullYear()

function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 text-sm text-neutral-600 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-semibold text-neutral-900">{site.name}</p>
          <p className="mt-1">{site.slogan}</p>
        </div>

        <address className="flex flex-col gap-2 not-italic">
          <span className="inline-flex items-center gap-2">
            <MapPin className="size-4" aria-hidden="true" />
            {site.location}
          </span>
          <a
            href={`tel:${site.phone.replaceAll(' ', '')}`}
            className="inline-flex items-center gap-2 transition hover:text-neutral-900"
          >
            <Phone className="size-4" aria-hidden="true" />
            {site.phone}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 transition hover:text-neutral-900"
          >
            <Mail className="size-4" aria-hidden="true" />
            {site.email}
          </a>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-neutral-900"
          >
            Instagram: @jossyglamour
          </a>
        </address>
      </div>

      <div className="border-t border-neutral-200 px-4 py-4 text-center text-xs text-neutral-500">
        &copy; {year} {site.name}. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer

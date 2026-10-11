import { Link } from 'react-router'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Seo from '../components/Seo.jsx'
import { heroSlides, services } from '../data/home.js'

function NotFound() {
  return (
    <section className="flex flex-1 items-center justify-center px-gutter py-[clamp(48px,8vw,112px)]">
      <Seo
        title="Page not found"
        description="The page you are looking for may have moved or no longer exists."
        noindex
      />
      <div className="flex w-full max-w-190 flex-col items-center gap-7 text-center">
        <div className="flex items-center gap-3 font-label text-label font-medium text-pink-500 uppercase">
          <span className="h-px w-7 bg-pink-500" />
          Error 404
          <span className="h-px w-7 bg-pink-500" />
        </div>

        <div
          aria-hidden="true"
          className="flex items-center justify-center gap-[clamp(8px,2vw,20px)] font-display text-[clamp(110px,22vw,220px)] leading-[0.8] font-bold tracking-[-0.06em] text-black"
        >
          <span>4</span>
          <div className="aspect-[3/4.4] w-[clamp(78px,15vw,150px)] shrink-0 overflow-hidden rounded-[999px_999px_14px_14px] bg-pink-300">
            <img
              src={heroSlides[0].src}
              alt=""
              className="block size-full object-cover"
            />
          </div>
          <span className="text-pink-500">4</span>
        </div>

        <h1 className="mt-2 font-display text-[clamp(30px,4vw,48px)] leading-[1.08] font-bold tracking-[-0.035em] text-balance">
          This page couldn’t be found.
        </h1>
        <p className="max-w-130 text-lead text-pretty text-charcoal">
          The page you’re looking for may have moved or no longer exists. Head
          back home or explore our services below.
        </p>

        <div className="flex flex-wrap justify-center gap-3 pt-1">
          <Link
            to="/"
            className="flex items-center gap-2.5 rounded-pill bg-black px-7.5 py-4.25 font-ui text-small font-semibold text-white transition-colors duration-(--dur-fast) hover:bg-pink-500"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to Home
          </Link>
          <Link
            to={{ hash: '#contact' }}
            className="rounded-pill border border-black px-7 py-4 font-ui text-small font-semibold text-black transition-colors duration-(--dur-fast) hover:border-pink-500 hover:text-pink-500"
          >
            Contact Us
          </Link>
        </div>

        <div className="mt-[clamp(24px,4vw,48px)] grid w-full grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] border-t border-line-ink">
          {services.map((service) => (
            <Link
              key={service.num}
              to="/#services"
              className="flex items-center justify-between gap-3 border-b border-line-ink px-2 py-5.5 text-left font-display text-[17px] font-bold text-black transition-colors duration-(--dur-fast) hover:text-pink-500"
            >
              {service.title.replace('Creative Services', 'Creative')}
              <ArrowRight className="size-4 shrink-0 text-pink-500" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NotFound

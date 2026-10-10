import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { site } from '../../config/site.js'
import { heroSlides } from '../../data/home.js'

const SLIDE_INTERVAL = 5000

function Hero() {
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = setInterval(
      () => setSlide((slide) => (slide + 1) % heroSlides.length),
      SLIDE_INTERVAL,
    )
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="mx-auto grid w-full max-w-site grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-center gap-[clamp(40px,6vw,96px)] px-gutter pt-[clamp(40px,6vw,80px)] pb-[clamp(56px,7vw,96px)]">
      <div className="flex flex-col gap-7">
        <h1 className="animate-fade-up font-display text-h1 font-bold text-balance [animation-delay:.12s]">
          Endless beauty <span className="text-pink-500">without borders.</span>
        </h1>
        <p className="max-w-125 animate-fade-up text-lead text-pretty text-charcoal [animation-delay:.24s]">
          Jossyglamour is a UK-based beauty and fashion brand in Newcastle,
          United Kingdom, specialising in custom headwear, fascinators,
          professional makeup, and personal styling for weddings, cultural
          events, photoshoots, and special occasions.
        </p>
        <div className="flex animate-fade-up flex-wrap gap-3 pt-1 [animation-delay:.36s]">
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 rounded-pill bg-black px-7.5 py-4.25 font-ui text-small font-semibold text-white transition-colors duration-(--dur-fast) hover:bg-pink-500"
          >
            Book an Appointment
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
          <Link
            to="/#services"
            className="rounded-pill border border-black px-7 py-4 font-ui text-small font-semibold text-black transition-colors duration-(--dur-fast) hover:border-pink-500 hover:text-pink-500"
          >
            Explore Services
          </Link>
        </div>
      </div>

      <div className="relative w-full max-w-105 animate-fade-up justify-self-center [animation-delay:.2s] [animation-duration:1.1s]">
        <div className="relative aspect-4/5 overflow-hidden rounded-arch bg-pink-300">
          {heroSlides.map((item, i) => (
            <img
              key={item.src}
              src={item.src}
              alt={item.label}
              loading={i === 0 ? 'eager' : 'lazy'}
              fetchPriority={i === 0 ? 'high' : 'auto'}
              aria-hidden={i !== slide}
              className={`absolute inset-0 block size-full object-cover motion-reduce:transition-none ${
                i === slide ? 'scale-106 opacity-100' : 'scale-100 opacity-0'
              }`}
              style={{
                transition: 'opacity var(--dur-crossfade) ease, scale 6s ease-out',
              }}
            />
          ))}
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-linear-to-t from-black/55 to-black/0 px-5 pt-12 pb-4.5">
            <span className="font-label text-xs font-medium tracking-[0.12em] text-white uppercase">
              {heroSlides[slide].label}
            </span>
            <div className="flex gap-1.5">
              {heroSlides.map((item, i) => (
                <button
                  key={item.src}
                  type="button"
                  onClick={() => setSlide(i)}
                  aria-label={`Show slide ${i + 1}: ${item.label}`}
                  aria-current={i === slide}
                  className={`h-0.75 cursor-pointer rounded-xs transition-[width,background-color] duration-400 ${
                    i === slide ? 'w-5.5 bg-white' : 'w-2 bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-14 -left-3 max-w-50 rounded-md bg-pink-500 px-4.5 py-4 text-white shadow-[0_20px_40px_-20px_rgb(221_49_133/0.7)] min-[480px]:-left-7">
          <div className="font-display text-base leading-tight font-bold tracking-[-0.01em]">
            Fascinators, hats, turbans &amp; gele
          </div>
          <div className="mt-1.5 font-meta text-xs text-pink-100">
            Made to order for special occasions
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

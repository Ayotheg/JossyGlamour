import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { site } from '../../config/site.js'
import { heroSlides } from '../../data/home.js'
import { DESKTOP_QUERY, useMediaQuery } from '../../hooks/useMediaQuery.js'

const SLIDE_INTERVAL = 5000

const intro =
  'Jossyglamour is a UK-based beauty and fashion brand in Newcastle, United Kingdom, specialising in custom headwear, fascinators, professional makeup, and personal styling for weddings, cultural events, photoshoots, and special occasions.'

function Slides({ slide, className = '' }) {
  return heroSlides.map((item, i) => (
    <img
      key={item.src}
      src={item.src}
      alt={item.label}
      loading={i === 0 ? 'eager' : 'lazy'}
      fetchPriority={i === 0 ? 'high' : 'auto'}
      aria-hidden={i !== slide}
      className={`absolute inset-0 block size-full object-cover motion-reduce:transition-none ${className} ${
        i === slide ? 'scale-106 opacity-100' : 'scale-100 opacity-0'
      }`}
      style={{
        transition: 'opacity var(--dur-crossfade) ease, scale 6s ease-out',
      }}
    />
  ))
}

function DesktopHero({ slide, setSlide }) {
  return (
    <section className="mx-auto grid w-full max-w-site grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-center gap-[clamp(40px,6vw,96px)] px-gutter pt-[clamp(40px,6vw,80px)] pb-[clamp(56px,7vw,96px)]">
      <div className="flex flex-col gap-7">
        <h1 className="animate-fade-up font-display text-h1 font-bold text-balance [animation-delay:.12s]">
          Endless beauty <span className="text-pink-500">without borders.</span>
        </h1>
        <p className="max-w-125 animate-fade-up text-lead text-pretty text-charcoal [animation-delay:.24s]">
          {intro}
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
          <Slides slide={slide} />
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

        <div className="absolute bottom-14 -left-7 max-w-50 rounded-md bg-pink-500 px-4.5 py-4 text-white shadow-[0_20px_40px_-20px_rgb(221_49_133/0.7)]">
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

// Phones and small tablets: a full-bleed photo with the headline over it.
function MobileHero({ slide, setSlide }) {
  return (
    <section className="bg-blush">
      <div className="relative h-[min(calc(100svh-72px),620px)] min-h-110 overflow-hidden bg-charcoal">
        <Slides slide={slide} className="object-[50%_25%]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgb(0_0_0/0.72)_0%,rgb(0_0_0/0.25)_45%,rgb(0_0_0/0)_70%)]" />
        <div className="absolute inset-x-5 top-4 flex gap-1.5">
          {heroSlides.map((item, i) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setSlide(i)}
              aria-label={`Show slide ${i + 1}: ${item.label}`}
              aria-current={i === slide}
              className={`h-0.5 flex-1 cursor-pointer rounded-xs transition-colors duration-400 ${
                i === slide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
        <div className="absolute inset-x-5 bottom-7 flex animate-fade-up flex-col gap-3.5 text-white">
          <div className="flex items-center gap-2.5 font-label text-[11px] font-medium tracking-[0.16em] text-pink-100 uppercase">
            <span className="h-px w-5 bg-pink-300" />
            {heroSlides[slide].label}
          </div>
          <h1 className="font-display text-[clamp(38px,11vw,52px)] leading-none font-bold tracking-[-0.04em] text-balance text-white">
            Endless beauty <span className="text-pink-300">without borders.</span>
          </h1>
        </div>
      </div>

      <div className="flex animate-fade-up flex-col gap-6 px-5 pt-7 pb-12 [animation-delay:.2s]">
        <p className="text-base leading-[1.65] text-pretty text-charcoal">{intro}</p>
        <div className="flex flex-col gap-2.5">
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 rounded-pill bg-black px-6 py-4.25 font-ui text-small font-semibold text-white transition-colors duration-(--dur-fast) hover:bg-pink-500"
          >
            Book an Appointment
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
          <Link
            to="/#services"
            className="flex justify-center rounded-pill border border-black px-6 py-4 font-ui text-small font-semibold text-black transition-colors duration-(--dur-fast) hover:border-pink-500 hover:text-pink-500"
          >
            Explore Services
          </Link>
        </div>
        <div className="flex justify-between gap-3 border-t border-line-ink pt-5 font-label text-xs tracking-[0.04em] text-charcoal">
          <span>{site.location}</span>
          <span className="text-pink-500">Open 7 days</span>
        </div>
      </div>
    </section>
  )
}

function Hero() {
  const [slide, setSlide] = useState(0)
  const isDesktop = useMediaQuery(DESKTOP_QUERY)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = setInterval(
      () => setSlide((slide) => (slide + 1) % heroSlides.length),
      SLIDE_INTERVAL,
    )
    return () => clearInterval(timer)
  }, [])

  return isDesktop ? (
    <DesktopHero slide={slide} setSlide={setSlide} />
  ) : (
    <MobileHero slide={slide} setSlide={setSlide} />
  )
}

export default Hero

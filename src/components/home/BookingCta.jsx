import { ArrowRight } from 'lucide-react'
import { site } from '../../config/site.js'
import Reveal from '../Reveal.jsx'

function BookingCta() {
  return (
    <section className="px-gutter pb-section-y">
      <Reveal className="mx-auto grid max-w-294 grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-end gap-10 rounded-2xl bg-pink-500 px-[clamp(28px,6vw,88px)] py-[clamp(48px,7vw,96px)] text-white">
        <div className="flex flex-col gap-5">
          <div className="font-label text-label font-medium text-pink-100 uppercase">
            Book An Appointment
          </div>
          <h2 className="font-display text-[clamp(48px,6vw,84px)] leading-[0.95] font-bold tracking-[-0.045em]">
            Treat Yourself
          </h2>
        </div>
        <div className="flex flex-col gap-7">
          <p className="text-body text-pretty text-white">
            At Jossyglamour, we don’t just provide services we create
            experiences that make you feel confident, empowered, and absolutely
            beautiful. Let us help you express your unique style and showcase
            your inner glow!
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-pill bg-black px-7.5 py-4.25 font-ui text-small font-semibold text-white transition-colors duration-(--dur-fast) hover:bg-white hover:text-black"
            >
              Book a Service
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href={site.phoneHref}
              className="rounded-pill border border-white px-7 py-4 font-ui text-small font-semibold text-white transition-colors duration-(--dur-fast) hover:bg-white hover:text-pink-500"
            >
              Call Us
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default BookingCta

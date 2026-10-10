import { ArrowRight } from 'lucide-react'
import { site } from '../../config/site.js'
import { services } from '../../data/home.js'
import Reveal from '../Reveal.jsx'

function Services() {
  return (
    <section
      id="services"
      className="mx-auto w-full max-w-site scroll-mt-20 px-gutter py-section-y"
    >
      <Reveal className="mb-[clamp(40px,5vw,64px)] flex flex-wrap items-end justify-between gap-8">
        <div className="flex flex-col gap-4">
          <div className="font-label text-label font-medium text-pink-500 uppercase">
            Services
          </div>
          <h2 className="font-display text-h2 font-bold">Our Services</h2>
        </div>
        <a
          href={site.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-pill bg-black px-7 py-4 font-ui text-small font-semibold text-white transition-colors duration-(--dur-fast) hover:bg-pink-500"
        >
          Book a Service
        </a>
      </Reveal>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-5">
        {services.map((service, i) => (
          <Reveal key={service.num} delay={i * 120} className="flex">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full flex-col overflow-hidden rounded-xl border border-line-pink bg-white text-black transition-[translate,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <div className="aspect-4/3 overflow-hidden bg-pink-300">
                <img
                  src={service.img}
                  alt={service.title}
                  loading="lazy"
                  className="block size-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3.5 p-7">
                <div className="font-label text-[13px] font-medium text-pink-500">
                  {service.num}
                </div>
                <h3 className="font-display text-h3 font-bold">{service.title}</h3>
                <ul className="flex flex-1 flex-col">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-baseline gap-3 border-b border-charcoal/8 py-2.25 text-small leading-normal text-charcoal"
                    >
                      <span className="size-1.25 shrink-0 -translate-y-0.75 rounded-full bg-pink-500" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-2.5 font-ui text-ui font-semibold">
                  Book this service
                  <ArrowRight className="size-4 text-pink-500" aria-hidden="true" />
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Services

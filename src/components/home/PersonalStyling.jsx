import { whatsappLink } from '../../config/site.js'
import { stylingImage } from '../../data/home.js'
import Reveal from '../Reveal.jsx'

const points = [
  {
    key: 'A',
    text: 'We guide you on how to match your outfit, headwear, and accessories. Whether you are unsure of what to wear or how to combine your look, we help you create a complete and elegant appearance.',
  },
  {
    key: 'B',
    text: 'We also support clients with outfit ideas for weddings, traditional events, and special occasions, including multiple outfit changes.',
  },
]

function PersonalStyling() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-site grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] items-center gap-[clamp(32px,5vw,80px)] px-gutter py-section-y">
        <Reveal className="aspect-[4/4.4] max-h-[min(620px,80vh)] w-full max-w-125 min-w-0 justify-self-start overflow-hidden rounded-[18px] bg-pink-300 tab:aspect-4/5 tab:rounded-xl">
          <img
            src={stylingImage.src}
            alt={stylingImage.alt}
            loading="lazy"
            className="block size-full object-cover object-[50%_20%]"
          />
        </Reveal>

        <Reveal delay={120} className="flex flex-col gap-6">
          <div className="font-label text-label font-medium text-pink-500 uppercase">
            One-on-one
          </div>
          <h2 className="font-display text-[clamp(34px,4vw,56px)] leading-[1.02] font-bold tracking-[-0.04em] text-balance">
            Personal Styling &amp; Consultation
          </h2>
          <p className="text-body text-pretty text-charcoal">
            We offer one-on-one styling consultation to help you choose the
            perfect look for your event.
          </p>
          <div className="flex flex-col border-t border-charcoal/14">
            {points.map((point) => (
              <div
                key={point.key}
                className="grid grid-cols-[40px_1fr] gap-3 border-b border-charcoal/14 py-5"
              >
                <span className="pt-0.75 font-label text-[13px] text-pink-500">
                  {point.key}
                </span>
                <span className="text-base leading-[1.65] text-black">
                  {point.text}
                </span>
              </div>
            ))}
          </div>
          <div className="flex">
            <a
              href={whatsappLink('consultation')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-auto rounded-pill bg-pink-500 px-7 py-4 text-center font-ui text-small font-semibold text-white transition-colors duration-(--dur-fast) hover:bg-black desk:flex-none"
            >
              Book a Consultation
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default PersonalStyling

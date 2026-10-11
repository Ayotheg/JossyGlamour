import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { site } from '../../config/site.js'
import { galleryFilters, galleryImages } from '../../data/home.js'
import Reveal from '../Reveal.jsx'

// Tiles that span two rows in the "All" view.
const TALL = new Set([0, 3, 7, 10, 13, 16])

const instagramClass =
  'items-center justify-center gap-1.5 rounded-pill border border-black font-ui text-small font-semibold text-black transition-colors duration-(--dur-fast) hover:border-pink-500 hover:text-pink-500'

function Gallery() {
  const [category, setCategory] = useState('all')

  const images =
    category === 'all'
      ? galleryImages
      : galleryImages.filter((image) => image.category === category)

  return (
    <section
      id="work"
      className="mx-auto w-full max-w-site scroll-mt-20 px-gutter py-section-y"
    >
      <Reveal className="mb-[clamp(36px,4vw,56px)] flex flex-wrap items-end justify-between gap-6">
        <div className="flex flex-col gap-4">
          <div className="font-label text-label font-medium text-pink-500 uppercase">
            Gallery
          </div>
          <h2 className="font-display text-h2 font-bold">Our Work</h2>
        </div>
        <a
          href={site.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className={`hidden px-6.5 py-3.75 desk:flex ${instagramClass}`}
        >
          More on Instagram
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </Reveal>

      <Reveal className="mb-5 flex flex-wrap gap-2 tab:mb-7 tab:gap-2.5">
        {galleryFilters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            onClick={() => setCategory(filter.id)}
            aria-pressed={category === filter.id}
            className={`cursor-pointer rounded-pill border border-black px-4 py-2.5 font-ui text-[13px] font-semibold whitespace-nowrap transition-colors duration-(--dur-fast) hover:border-pink-500 tab:px-5.5 tab:py-3 tab:text-ui ${
              category === filter.id
                ? 'bg-black text-white'
                : 'bg-transparent text-black'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </Reveal>

      <div className="grid grid-flow-dense auto-rows-[170px] grid-cols-2 gap-2.5 tab:auto-rows-[240px] tab:grid-cols-[repeat(auto-fill,minmax(min(100%,240px),1fr))] tab:gap-3.5">
        {images.map((image, i) => {
          const tall =
            image.fullLength || (category === 'all' ? TALL.has(i) : i % 3 === 0)
          return (
            <Reveal
              key={image.src}
              delay={(i % 4) * 80}
              className={`overflow-hidden rounded-[12px] bg-pink-300 tab:rounded-[18px] ${
                tall ? 'row-span-2' : 'row-span-1'
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className={`block size-full object-cover transition-transform duration-600 hover:scale-104 ${image.position ?? ''}`}
              />
            </Reveal>
          )
        })}
      </div>

      <a
        href={site.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-6 flex px-6 py-4 desk:hidden ${instagramClass}`}
      >
        More on Instagram
        <ArrowUpRight className="size-4" aria-hidden="true" />
      </a>
    </section>
  )
}

export default Gallery

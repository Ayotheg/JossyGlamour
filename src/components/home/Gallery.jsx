import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { site } from '../../config/site.js'
import { galleryFilters, galleryImages } from '../../data/home.js'
import Reveal from '../Reveal.jsx'

// Tiles that span two rows in the "All" view.
const TALL = new Set([0, 3, 7, 10])

const categoryLabels = Object.fromEntries(
  galleryFilters.map((filter) => [filter.id, filter.label]),
)

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
          className="flex items-center gap-1.5 rounded-pill border border-black px-6.5 py-3.75 font-ui text-small font-semibold text-black transition-colors duration-(--dur-fast) hover:border-pink-500 hover:text-pink-500"
        >
          More on Instagram
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </Reveal>

      <Reveal className="mb-7 flex flex-wrap gap-2.5">
        {galleryFilters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            onClick={() => setCategory(filter.id)}
            aria-pressed={category === filter.id}
            className={`cursor-pointer rounded-pill border border-black px-5.5 py-3 font-ui text-ui font-semibold transition-colors duration-(--dur-fast) hover:border-pink-500 ${
              category === filter.id
                ? 'bg-black text-white'
                : 'bg-transparent text-black'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </Reveal>

      <div className="grid grid-flow-dense auto-rows-[240px] grid-cols-[repeat(auto-fill,minmax(min(100%,240px),1fr))] gap-3.5">
        {images.map((image, i) => {
          const tall = category === 'all' ? TALL.has(i) : i % 3 === 0
          return (
            <Reveal
              key={image.src}
              delay={(i % 4) * 80}
              className={`overflow-hidden rounded-[18px] bg-pink-300 ${
                tall ? 'row-span-2' : 'row-span-1'
              }`}
            >
              <img
                src={image.src}
                alt={`Jossyglamour work: ${categoryLabels[image.category]}`}
                loading="lazy"
                className="block size-full object-cover transition-transform duration-600 hover:scale-104"
              />
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

export default Gallery

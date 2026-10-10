// Home page content. Service lists come from About.md.
// The files in public/gallery are placeholders until the real photos replace
// them under the same names.
const img = (name) => `/gallery/${name}.jpeg`

export const heroSlides = [
  { src: img('2025-12-Jossy-img-3'), label: 'Custom headwear' },
  { src: img('2026-01-Beuaty-img-123'), label: 'Beauty services' },
  { src: img('2026-01-FA-JossyGlamour-6'), label: 'Fashion & accessories' },
  { src: img('2026-01-Jossyglamour-Parafet-img-7'), label: 'Styling & creative' },
]

export const services = [
  {
    num: '01',
    title: 'Beauty Services',
    img: img('2026-01-Beuaty-img-123'),
    items: [
      'Bridal and event makeup',
      'Makeup for parties, photoshoots, and special events',
      'Hair installations, braids, and hair styling',
      'Microblading',
      'Nail services',
    ],
  },
  {
    num: '02',
    title: 'Fashion & Accessories',
    img: img('2026-01-FA-JossyGlamour-6'),
    items: [
      'Custom-made hats and fascinators',
      'Bespoke headpieces',
      'Gele (African headwrap) and head wraps',
      'Turbans and traditional caps',
      'Handmade and customised hand fans',
      'Handmade fashion accessories',
    ],
  },
  {
    num: '03',
    title: 'Styling & Creative Services',
    img: img('2026-01-Jossyglamour-Parafet-img-7'),
    items: [
      'One-on-one personal styling consultations',
      'Outfit planning for weddings and traditional events, including multiple outfit changes',
      'Costume design',
      'Costume hire for shows, photoshoots, and themed parties',
    ],
  },
]

export const stylingImage = img('2026-01-Styling-Creative-Services-001')

export const galleryFilters = [
  { id: 'all', label: 'All' },
  { id: 'beauty', label: 'Beauty Services' },
  { id: 'fashion', label: 'Fashion & Accessories' },
  { id: 'styling', label: 'Styling & Creative Services' },
]

// Order matters: it is the display order of the "All" view.
export const galleryImages = [
  { src: img('2025-12-Jossy-img-3'), category: 'fashion' },
  { src: img('2026-01-Beuaty-img-123'), category: 'beauty' },
  { src: img('2025-12-Jossy-img-4'), category: 'fashion' },
  { src: img('2026-01-FA-JossyGlamour-6'), category: 'fashion' },
  { src: img('2025-12-Jossy-img-6'), category: 'beauty' },
  { src: img('2026-01-Jossyglamour-Parafet-img-7'), category: 'styling' },
  { src: img('2025-12-Jossy-img-2'), category: 'fashion' },
  { src: img('2026-01-Jossyglamour-Parafet-img-6'), category: 'styling' },
  { src: img('2026-01-Jossy-img-2'), category: 'beauty' },
  { src: img('2026-01-Jossyglamour-Parafet-img-5'), category: 'styling' },
  { src: img('2026-01-Styling-Creative-Services-001'), category: 'styling' },
  { src: img('2026-01-Jossyglamour-Parafet-img-8'), category: 'styling' },
]

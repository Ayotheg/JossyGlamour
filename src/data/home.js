// Home page content. Service lists come from About.md.
// Photos live in public/gallery; they are cropped, web-sized copies of the
// originals in public/resources.
const img = (name) => `/gallery/${name}.jpg`

export const heroSlides = [
  { src: img('gold-ribbon-fascinator'), label: 'Custom headwear' },
  { src: img('red-sunburst-crown-photoshoot'), label: 'Beauty services' },
  { src: img('teal-flower-headpiece'), label: 'Fashion & accessories' },
  { src: img('event-styling-white-dress'), label: 'Styling & creative' },
]

export const services = [
  {
    num: '01',
    title: 'Beauty Services',
    img: img('red-sunburst-crown-photoshoot'),
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
    img: img('white-feather-hand-fan'),
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
    img: img('gold-headpieces-styled'),
    items: [
      'One-on-one personal styling consultations',
      'Outfit planning for weddings and traditional events, including multiple outfit changes',
      'Costume design',
      'Costume hire for shows, photoshoots, and themed parties',
    ],
  },
]

export const stylingImage = {
  src: img('red-feather-fascinator'),
  alt: 'Red feather fascinator styled with a matching red sequin dress',
}

export const galleryFilters = [
  { id: 'all', label: 'All' },
  { id: 'beauty', label: 'Beauty Services' },
  { id: 'fashion', label: 'Fashion & Accessories' },
  { id: 'styling', label: 'Styling & Creative Services' },
]

// Order matters: it is the display order of the "All" view.
export const galleryImages = [
  {
    src: img('red-feather-fascinator'),
    category: 'styling',
    alt: 'Red feather fascinator styled with a matching red sequin dress',
  },
  {
    src: img('gold-ribbon-fascinator'),
    category: 'fashion',
    alt: 'Gold ribbon loop fascinator',
  },
  {
    src: img('white-feather-hand-fan'),
    category: 'fashion',
    alt: 'White feather hand fan with a gold beaded handle',
  },
  {
    src: img('event-styling-white-dress'),
    category: 'styling',
    alt: 'Client styled in a white fringed dress at an event venue',
  },
  {
    src: img('teal-flower-headpiece'),
    category: 'fashion',
    alt: 'Teal flower headpiece on gold stems',
  },
  {
    src: img('red-sunburst-crown-photoshoot'),
    category: 'beauty',
    alt: 'Photoshoot makeup with a red sunburst crown',
  },
  {
    src: img('black-feather-fascinator'),
    category: 'fashion',
    alt: 'Black feather fascinator with a net veil',
  },
  {
    src: img('teal-flower-headpiece-styled'),
    category: 'styling',
    alt: 'Teal flower headpiece styled with a matching green dress',
  },
  {
    src: img('green-loop-fascinator'),
    category: 'fashion',
    alt: 'Lime green looped fascinator with beaded sprays',
  },
  {
    src: img('gold-headpieces-styled'),
    category: 'styling',
    alt: 'Three gold sculpted headpieces styled with gold sequin dresses',
  },
  {
    src: img('blue-flower-fascinator'),
    category: 'fashion',
    alt: 'Blue flower fascinator on a headband',
  },
  {
    src: img('yellow-feather-fascinator'),
    category: 'fashion',
    alt: 'Yellow feather fascinator with a crystal brooch',
  },
  {
    src: img('green-feather-hat'),
    category: 'fashion',
    alt: 'Dark green feather hat with matching mini fascinators',
  },
  {
    src: img('custom-name-hand-fan'),
    category: 'fashion',
    alt: 'Customised hand fan with a name and emblem',
  },
  {
    src: img('peach-feather-hand-fan'),
    category: 'fashion',
    alt: 'Peach feather hand fan with a beaded handle',
  },
]

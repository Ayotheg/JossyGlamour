// Home page content. Service lists come from About.md.
// Photos live in public/gallery; they are cropped, web-sized copies of the
// originals in public/resources.
const img = (name) => `/gallery/${name}.jpg`

export const heroSlides = [
  { src: img('gold-ribbon-fascinator'), label: 'Custom headwear' },
  { src: img('makeup-pink-gele'), label: 'Beauty services' },
  { src: img('teal-flower-headpiece'), label: 'Fashion & accessories' },
  { src: img('print-gele-headwrap'), label: 'Styling & creative' },
]

export const services = [
  {
    num: '01',
    title: 'Beauty Services',
    img: img('makeup-red-gele'),
    // Portrait photos in a landscape frame: shift up to keep the gele in view.
    imgPosition: 'object-[50%_20%]',
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
    img: img('print-gele-headwrap'),
    imgPosition: 'object-[50%_20%]',
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
    img: img('red-feather-fascinator'),
    imgPosition: 'object-[50%_10%]',
    items: [
      'One-on-one personal styling consultations',
      'Outfit planning for weddings and traditional events, including multiple outfit changes',
      'Costume design',
      'Costume hire for shows, photoshoots, and themed parties',
    ],
  },
]

export const stylingImage = {
  src: img('traditional-outfit-red-gele'),
  alt: 'Client styled in a red traditional outfit with a matching gele and gold jewellery',
}

export const galleryFilters = [
  { id: 'all', label: 'All' },
  { id: 'beauty', label: 'Beauty Services' },
  { id: 'fashion', label: 'Fashion & Accessories' },
  { id: 'styling', label: 'Styling & Creative Services' },
]

// Order matters: it is the display order of the "All" view.
// `fullLength` photos always get a tall tile so the person is not cut off;
// `position` moves the crop when the subject is not in the middle.
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
    src: img('makeup-red-gele'),
    category: 'beauty',
    alt: 'Glam makeup with a beaded red gele and statement necklace',
  },
  {
    src: img('traditional-outfit-red-gele'),
    category: 'styling',
    alt: 'Client styled in a red traditional outfit with a matching gele and gold jewellery',
    fullLength: true,
    position: 'object-[50%_10%]',
  },
  {
    src: img('teal-flower-headpiece'),
    category: 'fashion',
    alt: 'Teal flower headpiece on gold stems',
  },
  {
    src: img('makeup-pink-gele'),
    category: 'beauty',
    alt: 'Glam makeup with a pink gele headwrap and matching dress',
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
    fullLength: true,
  },
  {
    src: img('black-feather-fascinator'),
    category: 'fashion',
    alt: 'Black feather fascinator with a net veil',
  },
  {
    src: img('print-gele-headwrap'),
    category: 'fashion',
    alt: 'Multicolour print gele headwrap with coral beads',
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
    position: 'object-[50%_85%]',
  },
]

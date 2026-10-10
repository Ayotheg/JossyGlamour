import Reveal from '../Reveal.jsx'

// Copy from About.md.
const columns = [
  {
    label: '01 — Who We Are',
    text: 'Jossyglamour designs and creates unique headpieces and accessories, including fascinators, hats, turbans, gele (African headwrap), customised hand fans, and traditional caps. We also offer professional makeup, hair, and beauty services, along with one-on-one styling so every client looks and feels confident on their big day.',
  },
  {
    label: '02 — Our Founder',
    text: "Josephine Chukwu has worked in the beauty and fashion industry since 2019. Her work combines makeup artistry, photography, and bespoke fashion accessories. Each piece is made to complement the client's style, outfit, and occasion, whether that is a wedding, fashion event, celebration, or formal gathering.",
  },
  {
    label: '03 — Our Vision',
    text: 'We aim to grow Jossyglamour into a fashion and creative business that offers training, production, and skills development to empower others.',
  },
]

function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-y border-line-pink bg-white"
    >
      <div className="mx-auto flex max-w-site flex-col gap-[clamp(48px,6vw,80px)] px-gutter py-[clamp(56px,8vw,120px)]">
        <Reveal className="flex flex-wrap items-center gap-[clamp(28px,4vw,56px)]">
          <div className="w-full shrink-0 tab:w-[clamp(200px,20vw,260px)] overflow-hidden rounded-b-[12px]">
            <img
              src="/resources/JossyGlamour-CEO.jpeg"
              alt="Josephine Chukwu, founder and creative director"
              width="1536"
              height="1542"
              loading="lazy"
              className="block h-auto w-full bg-pink-300"
            />
            <div className="flex flex-col gap-1 bg-pink-500 px-4.5 pt-4 pb-4.5">
              <span className="font-display text-[17px] font-bold text-white">
                Josephine Chukwu
              </span>
              <span className="font-label text-micro text-pink-100 uppercase">
                Founder · Creative Director
              </span>
            </div>
          </div>
          <div className="flex max-w-190 flex-[1_1_280px] flex-col gap-4.5">
            <div className="font-label text-label font-medium text-pink-500 uppercase">
              About Jossyglamour
            </div>
            <h2 className="font-display text-h2-sm font-bold text-balance">
              Led by founder and creative director Josephine Chukwu.
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-[clamp(28px,5vw,72px)] border-t border-line-ink pt-[clamp(32px,4vw,48px)]">
          {columns.map((column, i) => (
            <Reveal
              key={column.label}
              delay={i * 120}
              className="flex flex-col gap-4"
            >
              <h3 className="font-label text-[13px] font-medium text-pink-500">
                {column.label}
              </h3>
              <p className="text-body text-pretty text-charcoal">{column.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About

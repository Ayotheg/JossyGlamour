import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-6 left-1/2 z-30 flex size-13 -translate-x-1/2 cursor-pointer items-center justify-center rounded-full bg-black text-white shadow-float transition-[opacity,translate,background-color] duration-(--dur-base) hover:bg-pink-500 ${
        visible ? 'opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <ArrowUp className="size-4.5" strokeWidth={2} aria-hidden="true" />
    </button>
  )
}

export default BackToTop

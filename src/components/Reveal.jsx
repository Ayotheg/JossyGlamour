import { useEffect, useRef, useState } from 'react'

// Fades its content up the first time it scrolls into view. `delay` (ms)
// staggers siblings that enter together.
function Reveal({ as: Tag = 'div', className = '', delay = 0, children, ...props }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    // Wait until the block is clear of the bottom edge so the motion is seen.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -12% 0px' },
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-[opacity,translate] duration-(--dur-reveal) ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
        shown ? 'translate-y-0 opacity-100' : 'translate-y-(--reveal-offset) opacity-0'
      } ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}

export default Reveal

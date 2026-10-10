import { Link } from 'react-router'
import { ArrowLeft } from 'lucide-react'
import Seo from '../components/Seo.jsx'

function NotFound() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-5 px-gutter py-section-y text-center">
      <Seo
        title="Page not found"
        description="The page you are looking for does not exist or has been moved."
        noindex
      />
      <p className="font-label text-label font-medium text-pink-500 uppercase">
        404
      </p>
      <h1 className="font-display text-h2 font-bold">Page not found</h1>
      <p className="max-w-md text-body text-pretty text-charcoal">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-2 flex items-center gap-2.5 rounded-pill bg-black px-7.5 py-4.25 font-ui text-small font-semibold text-white transition-colors duration-(--dur-fast) hover:bg-pink-500"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        Back to home
      </Link>
    </section>
  )
}

export default NotFound

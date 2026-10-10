import { Link } from 'react-router'
import { ArrowLeft } from 'lucide-react'

function NotFound() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-4 px-4 py-16 text-center">
      <p className="text-sm font-semibold tracking-widest text-sky-400">404</p>
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        Page not found
      </h1>
      <p className="max-w-md text-slate-400">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-2 inline-flex items-center gap-2 rounded-lg bg-sky-500 px-5 py-2.5 font-medium text-white transition hover:bg-sky-400"
      >
        <ArrowLeft className="size-4" />
        Back to home
      </Link>
    </section>
  )
}

export default NotFound

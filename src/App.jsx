import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-slate-950 px-4 text-slate-100">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        React + Tailwind CSS
      </h1>
      <p className="text-slate-400">
        Edit <code className="rounded bg-slate-800 px-1.5 py-0.5 text-sm">src/App.jsx</code> and save to see changes.
      </p>
      <button
        type="button"
        onClick={() => setCount((count) => count + 1)}
        className="rounded-lg bg-sky-500 px-5 py-2.5 font-medium text-white transition hover:bg-sky-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
      >
        Count is {count}
      </button>
    </main>
  )
}

export default App

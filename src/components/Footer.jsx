const year = new Date().getFullYear()

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-6 text-center text-sm text-slate-400">
        &copy; {year} JossyWeb. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer

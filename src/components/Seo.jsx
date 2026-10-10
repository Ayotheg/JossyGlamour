import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { site } from '../config/site.js'

function setMeta(attr, key, content) {
  let tag = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, key)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function setCanonical(href) {
  let link = document.head.querySelector('link[rel="canonical"]')
  if (!href) {
    link?.remove()
    return
  }
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  link.setAttribute('href', href)
}

// Per-page <head> tags. Pass `title` without the brand suffix; omit it to use
// the site default. Use `noindex` for pages that should stay out of search.
function Seo({ title, description = site.description, noindex = false }) {
  const { pathname } = useLocation()
  const fullTitle = title ? `${title} | ${site.name}` : site.title

  useEffect(() => {
    const url = `${site.url}${pathname}`

    document.title = fullTitle
    setMeta('name', 'description', description)
    setMeta(
      'name',
      'robots',
      noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large',
    )
    setCanonical(noindex ? null : url)
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', url)
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('name', 'twitter:description', description)
  }, [fullTitle, description, noindex, pathname])

  return null
}

export default Seo

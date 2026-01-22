import { useLocation } from 'react-router-dom'

export default function useI18n() {
  const { pathname } = useLocation()

  const isRu = pathname === '/ru' || pathname.startsWith('/ru/')
  const lang = isRu ? 'ru' : 'en'
  const base = isRu ? '/ru' : ''

  const t = (value) => {
    if (typeof value === 'string') return value
    return value?.[lang] ?? value?.en ?? ''
  }

  const to = (path) => {
    if (!path) return base || '/'
    if (typeof path !== 'string') return path

    const normalized = path.startsWith('/') ? path : `/${path}`

    if (base && normalized.startsWith(`${base}/`)) return normalized
    return `${base}${normalized}`
  }

  return { isRu, lang, base, t, to }
}

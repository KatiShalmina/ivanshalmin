import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import styles from './AppLayout.module.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MenuOverlay from '../components/MenuOverlay'
import ScrollRestoration from '../components/ScrollRestoration'
import { useEffect } from 'react'

export default function AppLayout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const isRu = location.pathname === '/ru' || location.pathname.startsWith('/ru/')

  const isHome = location.pathname === '/' || location.pathname === '/ru' ||
  location.pathname === '/ru/'

  useEffect(() => {
    document.documentElement.lang = isRu ? 'ru' : 'en'
  }, [isRu])

  return (
    <div className={styles.page}>
      <ScrollRestoration />
      <Header setMenuOpen={setMenuOpen} />
      <MenuOverlay menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main className={isHome ? styles.mainHome : null}>
        {isHome ? (
          <Outlet />
        ) : (
          <div className='mainWrapper'>
            <Outlet />
          </div>
        )}
      </main>
      {!isHome && (
        <Footer />
      )}
    </div>
  )
}

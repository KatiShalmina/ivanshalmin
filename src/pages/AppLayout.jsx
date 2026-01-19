import { useState, useEffect } from 'react'
import { Outlet, useLocation, ScrollRestoration } from 'react-router-dom'
import styles from './AppLayout.module.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MenuOverlay from '../components/MenuOverlay'

export default function AppLayout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  const isRu = 
    pathname === '/ru' || 
    pathname.startsWith('/ru/')

  const isHome = 
    pathname === '/' || 
    pathname === '/ru' || 
    pathname === '/ru/'

  useEffect(() => {
    document.documentElement.lang = isRu ? 'ru' : 'en'
  }, [isRu])

  return (
    <div className={styles.page}>
      <ScrollRestoration />
      <Header setMenuOpen={setMenuOpen} />
      <MenuOverlay menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main className={isHome ? styles.mainHome : undefined}>
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

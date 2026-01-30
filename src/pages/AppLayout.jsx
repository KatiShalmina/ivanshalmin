import { useState, useEffect } from 'react'
import { Outlet, useLocation, ScrollRestoration } from 'react-router-dom'
import styles from './AppLayout.module.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MenuOverlay from '../components/MenuOverlay'
import useI18n from '../hooks/useI18n'

export default function AppLayout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  const { isRu, base } = useI18n()

  const isHome = 
    pathname === '/' || 
    pathname === `${base}/` || 
    pathname === base

  useEffect(() => {
    document.documentElement.lang = isRu ? 'ru' : 'en'
  }, [isRu])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <div className={styles.page}>
      <ScrollRestoration />
      <Header setMenuOpen={setMenuOpen} />
      {menuOpen && (
        <MenuOverlay 
          menuOpen={menuOpen} 
          setMenuOpen={setMenuOpen} 
        />
      )}
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

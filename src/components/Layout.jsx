import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import styles from './Layout.module.scss'
import Header from './Header'
import Footer from './Footer'
import MenuOverlay from './MenuOverlay'
import ScrollToTop from './ScrollToTop';

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className={styles.page}>
      <ScrollToTop />
      <Header setMenuOpen={setMenuOpen} />
      <MenuOverlay menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        {isHome ? (
          <Outlet />
        ) : (
          <div className='mainWrapper'>
            <Outlet />
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}

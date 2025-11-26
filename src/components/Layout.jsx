import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import styles from './Layout.module.scss'
import Header from './Header'
import Footer from './Footer'
import MenuOverlay from './MenuOverlay'

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className={styles.page}>
      <Header setMenuOpen={setMenuOpen} />
      <MenuOverlay menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

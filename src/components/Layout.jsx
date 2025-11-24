import styles from './Layout.module.scss'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}


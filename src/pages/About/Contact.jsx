import styles from './Contact.module.scss'

export default function Contact() {
  return (
    <section>
      <h1>Contacts</h1>
      <div className={styles.contactWrapper}>
        <a href='mailto:sasha.shalmina@gmail.com' target='_blank' rel='noopener noreferrer'>
          sasha.shalmina@gmail.com
        </a>
        <a href='tel:+447472063877'>
          +44 747 206 38 77
        </a>
      </div>
    </section>
  )
}
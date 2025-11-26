import styles from './Contacts.module.scss'

export default function Contacts() {
  return (
    <section>
      <h1>Contacts</h1>
      <div className={styles.contactsWrapper}>
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
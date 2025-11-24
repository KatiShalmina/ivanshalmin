import { Link } from 'react-router-dom'

export default function PublicationObject() {
  return (
    <section>
      <Link 
        to='..'
        relative='path'
        className='back-button'
      >
        &larr; <span>back to publications</span>
      </Link>
      <h1>PublicationObject</h1>
    </section>
  )
}
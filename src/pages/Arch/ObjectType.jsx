import { Link } from 'react-router-dom'

export default function ObjectType() {
  return (
    <section>
      <Link 
        to='..'
        relative='path'
        className='back-button'
      >
        &larr; <span>back to objects</span>
      </Link>
      <h1>ObjectType</h1>
    </section>
  )
}
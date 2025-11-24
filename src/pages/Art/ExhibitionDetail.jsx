import { Link } from 'react-router-dom'

export default function ExhibitionDetail() {
  return (
    <section>
      <Link 
        to='..'
        relative='path'
        className='back-button'
      >
        &larr; <span>back to exhibitions</span>
      </Link>
      <h1>ExhibitionDetail</h1>
    </section>
  )
}
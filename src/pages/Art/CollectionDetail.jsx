import { Link } from 'react-router-dom'

export default function PaintingDetail() {
  return (
    <section>
      <Link 
        to='..'
        relative='path'
        className='back-button'
      >
        &larr; <span>back to paintings</span>
      </Link>
      <h1>PaintingDetail</h1>
    </section>
  )
}
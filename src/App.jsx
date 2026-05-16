import { useState } from 'react'
import Chrome from './components/Chrome'
import Home from './pages/Home'
import Escritura from './pages/Escritura'
import Streaming from './pages/Streaming'
import Diseno from './pages/Diseno'

export default function App() {
  const [page, setPage] = useState('inicio')

  const setPageAndScroll = (p) => {
    setPage(p)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Chrome page={page} setPage={setPageAndScroll}>
      {page === 'inicio' && <Home setPage={setPageAndScroll} />}
      {page === 'escritura' && <Escritura />}
      {page === 'streaming' && <Streaming />}
      {page === 'diseno' && <Diseno />}
    </Chrome>
  )
}

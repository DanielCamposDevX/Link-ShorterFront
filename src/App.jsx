import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Ranking from './pages/ranking'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Ranking />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

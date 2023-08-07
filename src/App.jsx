import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login, Shorten, Ranking, Signup} from './pages/IndexPages'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Ranking />} />
        <Route path='/shorten' element={<Shorten />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

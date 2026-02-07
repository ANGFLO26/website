import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import People from './pages/People'
import News from './pages/News'
import Publications from './pages/Publications'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/people" element={<People />} />
          <Route path="/news" element={<News />} />
          <Route path="/publications" element={<Publications />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App

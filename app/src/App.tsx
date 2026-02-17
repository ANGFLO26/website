import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import People from './pages/People'
import News from './pages/News'
import Publications from './pages/Publications'
import './App.css'

function App() {
  return (
    <LanguageProvider>
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
    </LanguageProvider>
  )
}

export default App

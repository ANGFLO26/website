import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import People from './pages/People'
import News from './pages/News'
import Publications from './pages/Publications'
import { PageTransition } from './components/PageTransition'
import { BackToTop } from './components/BackToTop'
import { ReadingProgress } from './components/ReadingProgress'


function AnimatedRoutes() {
  const location = useLocation()

  return (
    <PageTransition>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<People />} />
        <Route path="/news" element={<News />} />
        <Route path="/publications" element={<Publications />} />
      </Routes>
    </PageTransition>
  )
}

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ReadingProgress />
        <Layout>
          <AnimatedRoutes />
        </Layout>
        <BackToTop />
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App

import { BrowserRouter, Route, Routes } from 'react-router'
import BackToTop from './components/BackToTop.jsx'
import Layout from './components/Layout.jsx'
import ScrollManager from './components/ScrollManager.jsx'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <BackToTop />
    </BrowserRouter>
  )
}

export default App

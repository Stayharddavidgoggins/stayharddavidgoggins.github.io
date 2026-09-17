import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import useMediaQuery from '@mui/material/useMediaQuery'

import './App.css'

import HomePage from './pages/HomePage'

import Schedule from '../src/components/schedule'

import About from './components/about'

import Contact from './components/contact'

import Welcome from './components/Welcome'

import Socials from './components/socials'

import MovibeNavigation from './components/MobileNavigation'

import DeskTopNavigation from './components/DesktopNavigation'



function PageLayout({ children, isMobile }) {

  return (

    <>

      {isMobile ? <MovibeNavigation /> : <DeskTopNavigation />}

      {children}

    </>

  )

}



function App() {

  const isMobile = useMediaQuery('(max-width: 899px)');

  return (

    <Router>

      <Routes>

        <Route path="/" element={<Welcome />} />

        <Route path="/home" element={

          <PageLayout isMobile={isMobile}>

            <HomePage />

          </PageLayout>

        } />

        <Route path="/schedule" element={

          <PageLayout isMobile={isMobile}>

            <Schedule />

          </PageLayout>

        } />

        <Route path="/about" element={

          <PageLayout isMobile={isMobile}>

            <About />

          </PageLayout>

        } />

        <Route path="/contact" element={

          <PageLayout isMobile={isMobile}>

            <Contact />

          </PageLayout>

        } />

        <Route path="/socials" element={

          <PageLayout isMobile={isMobile}>

            <Socials />

          </PageLayout>

        } />

      </Routes>

    </Router>

  )

}



export default App
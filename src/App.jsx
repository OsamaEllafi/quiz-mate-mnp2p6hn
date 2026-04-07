import React, { useEffect } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Lenis from 'lenis'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import QuickQuiz from './pages/QuickQuiz'
import SubscriptionPlans from './pages/SubscriptionPlans'
import FlashCards from './pages/FlashCards'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <HashRouter>
      <div className="min-h-screen bg-background text-text font-body flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quick-quiz" element={<QuickQuiz />} />
            <Route path="/flash-cards" element={<FlashCards />} />
            <Route path="/subscription-plans" element={<SubscriptionPlans />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </HashRouter>
  )
}

export default App

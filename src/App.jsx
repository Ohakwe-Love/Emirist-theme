
import React from 'react'
import Navbar from './components/Layout/Topbar'
import './App.css'
import Hero from './components/Sections/Hero';
import About from './components/Sections/AboutSection';
import Collection from './components/Sections/Collection';
import FAQ from './components/Sections/FAQ';
import Showcase from './components/Sections/Showcase';
import Carousel from './components/Sections/Carousel';
import Testimonials from './components/Sections/Testimonials';
import NewsLetter from './components/Sections/NewsLetter';
import Features from './components/Sections/Features';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <div>
      <Navbar />

      <Hero />

      <About />

      <Collection />

      <FAQ />

      <Carousel />

      <Showcase />

      <Testimonials />

      <NewsLetter />

      <Features />

      <Footer />

    </div>
  )
}

export default App
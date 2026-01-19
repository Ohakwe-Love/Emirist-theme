import Hero from '../components/Sections/Hero';
import About from '../components/Sections/AboutSection';
import Collection from '../components/Sections/Collection';
import FAQ from '../components/Sections/FAQ';
import Showcase from '../components/Sections/Showcase';
import Carousel from '../components/Sections/Carousel';
import Testimonials from '../components/Sections/Testimonials';
import NewsLetter from '../components/Sections/NewsLetter';
import Features from '../components/Sections/Features';
import Topbar from '../components/Layout/Topbar';
import Footer from '../components/Layout/Footer';

export default function HomePage() {
  return (
    <div>
      <Topbar />

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
  );
}
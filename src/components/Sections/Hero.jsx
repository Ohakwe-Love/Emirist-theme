import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MoveRight, ArrowRight, Heart, RefreshCw, ShoppingCart, User } from 'lucide-react';
import Logo from '../Core/Logo';
import Header from '../Layout/Header';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            category: "CRAFTSMANSHIP",
            title: "Timeless Elegance",
            subtitle: "And Precision",
            description: "Discover our collection of meticulously crafted timepieces. Each watch embodies Swiss precision and contemporary design. Where heritage meets innovation in perfect harmony.",
            bg: "/src/assets/images/hero/hero1.webp"
        },
        {
            category: "LUXURY COLLECTION",
            title: "Swiss Mastery",
            subtitle: "And Innovation",
            description: "Experience the pinnacle of horological excellence. Our curated selection features automatic movements and premium materials. Defining sophistication for the modern connoisseur.",
            bg: "/src/assets/images/hero/hero2.webp"
        },
        {
            category: "HERITAGE",
            title: "Classic Design",
            subtitle: "And Modern Comfort",
            description: "Embrace timeless aesthetics with contemporary functionality. Premium leather straps and sapphire crystal faces. Elegance that transcends fleeting trends and seasons.",
            bg: "/src/assets/images/hero/hero4.webp"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    // const nextSlide = () => {
    //     setCurrentSlide((prev) => (prev + 1) % slides.length);
    // };

    // const prevSlide = () => {
    //     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    // };

    return (
        <section className="relative w-full hero-wrapper hero-wrapper overflow-hidden bg-slate-700">
            <div className="relative w-full h-full">
                <Header />

                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <div className="absolute inset-0">
                            <img
                                src={slide.bg}
                                alt={slide.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-900/90"></div>
                        </div>

                        {/* Content */}
                        <div className="relative h-full flex items-center justify-center px-2">
                            <div className="max-w-4xl text-center text-white pt-6">
                                <p className="section-label">
                                    {slide.category}
                                </p>
                                <h1 className="text-4xl md:text-5xl font-serif mb-2">
                                    {slide.title}
                                </h1>
                                <h2 className="text-3xl md:text-4xl font-serif mb-6">
                                    {slide.subtitle}
                                </h2>
                                <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                                    {slide.description}
                                </p>
                                <a href="#" className="btn btn-primary gap-2 rounded inline-flex items-center">
                                    <span className="">Shop now</span>
                                    <div className="ml-3 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">
                                        <ArrowRight className='w-4.5 h-4.5' />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Hero;
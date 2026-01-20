import React, { useState } from 'react';
import { Send, MessageCircle } from 'lucide-react';

const NewsLetter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (email) {
      console.log('Email submitted:', email);
      setEmail('');
    }
  };

  return (
    <section className="relative bg-slate-900">

      {/* Hero Image Section */}
      <div className="relative h-[400px] sm:h-[500px] lg:h-[600px]">
        <img
          src="/src/assets/images/product/8.webp"
          alt="Luxury Watches"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <p className="text-[var(--primary-color)] text-xs sm:text-sm font-medium tracking-widest mb-4">
            ART OF COMFORT
          </p>
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif mb-8 sm:mb-12 max-w-4xl">
            Transforming Spaces, Transforming Style
          </h2>

          {/* Newsletter Input */}
          <div className="w-full max-w-xl">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                placeholder="Your email address"
                className="w-full px-6 py-4 sm:py-5 pr-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-[var(--primary-color)] transition-all"
              />
              <button
                onClick={handleSubmit}
                className="cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white hover:bg-[var(--primary-color)] rounded-full flex items-center justify-center transition-all duration-300 group"
              >
                <Send className="w-5 h-5 text-slate-900 group-hover:text-black transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
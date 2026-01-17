import React, { useState } from 'react';
import { Star, Quote } from 'lucide-react';


const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: "Alexander Chen",
            role: "Investment Banker",
            image: "/src/assets/images/testimonials/avatar-1.jpg",
            rating: 5,
            text: "The craftsmanship is absolutely remarkable. My Emirist chronograph has become my daily companion. The attention to detail and the smooth movement make it worth every penny. I've received countless compliments.",
            featured: true
        },
        {
            id: 2,
            name: "Sophia Martinez",
            role: "Fashion Designer",
            image: "/src/assets/images/testimonials/avatar-2.jpg",
            rating: 5,
            text: "Elegance redefined! The watch I purchased from Emirist perfectly complements my style. It's not just a timepiece; it's a statement. The quality is unmatched.",
            featured: false
        },
        {
            id: 3,
            name: "James Richardson",
            role: "Entrepreneur",
            image: "/src/assets/images/testimonials/avatar-3.jpg",
            rating: 5,
            text: "I've been collecting watches for over 15 years, and Emirist stands out. The Swiss movement is impeccable, and the customer service exceeded my expectations. Highly recommend!",
            featured: false
        },
    ];

    return (
        <section className="bg-gradient-to-b from-slate-800 to-slate-900 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side - Content */}
                    <div>
                        <p className="section-label">
                            CLIENT TESTIMONIALS
                        </p>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white mb-6">
                            What Our Customers Say
                        </h2>
                        <p className="text-gray-400 text-base mb-8 leading-relaxed max-w-md">
                            Discover why watch enthusiasts and collectors trust Emirist for their luxury timepieces. Our commitment to quality, craftsmanship, and customer satisfaction shines through in every testimonial.
                        </p>
                        <button className="btn-primary btn rounded">
                            View More
                        </button>
                    </div>

                    {/* Right Side - Testimonial Cards */}
                    <div className="relative min-h-[500px]">
                        {/* Card 1 - Top Right */}
                        <div className="testimonial-card w-[90%] mb-5 ml-auto bg-slate-800/50 border-slate-600/50  rounded backdrop-blur-sm border rounded- shadow-lg p-6 hover:shadow-xl transi   tion-shadow">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-blue-100">
                                    <img src={testimonials[0].image} alt={testimonials[0].name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-white font-bold text-base mb-1.5 flex items-center justify-between">{testimonials[0].name}
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none"><path fill="currentColor" fillOpacity={0.16} d="M10.99 9.449c.178 3.09-1.998 7.444-6.88 9.551L3 17.08c1.997-1.123 3.507-2.95 4.306-5.15c-2.886-.234-3.729-2.013-3.729-3.464c0-1.967 1.51-3.512 3.374-3.465c1.775-.047 3.817 1.311 4.039 4.448m10 0c.178 3.09-1.997 7.444-6.88 9.551L13 17.08c1.998-1.123 3.507-2.95 4.306-5.15c-2.886-.234-3.729-2.013-3.729-3.464c0-1.967 1.51-3.512 3.374-3.465c1.775-.047 3.817 1.311 4.039 4.448"></path><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M10.99 9.449c.178 3.09-1.998 7.444-6.88 9.551L3 17.08c1.997-1.123 3.507-2.95 4.306-5.15c-2.886-.234-3.729-2.013-3.729-3.464c0-1.967 1.51-3.512 3.374-3.465c1.775-.047 3.817 1.311 4.039 4.448m10 0c.178 3.09-1.997 7.444-6.88 9.551L13 17.08c1.998-1.123 3.507-2.95 4.306-5.15c-2.886-.234-3.729-2.013-3.729-3.464c0-1.967 1.51-3.512 3.374-3.465c1.775-.047 3.817 1.311 4.039 4.448"></path></g></svg>
                                    </h4>
                                    <p className="text-gray-400 text-sm mb-3">{testimonials[0].text}</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 - Middle Right (Highlighted) */}
                        <div className="testimonial-card sm:top-40  w-[90%] mb-5 bg-slate-800/50 border-slate-600/50  rounded backdrop-blur-sm border  shadow-xl p-6 hover:shadow-2xl transition-shadow z-10">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-[var(--primary-color)]">
                                    <img src={testimonials[1].image} alt={testimonials[1].name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-white font-bold text-base mb-1.5 flex items-center justify-between">{testimonials[1].name}
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none"><path fill="currentColor" fillOpacity={0.16} d="M10.99 9.449c.178 3.09-1.998 7.444-6.88 9.551L3 17.08c1.997-1.123 3.507-2.95 4.306-5.15c-2.886-.234-3.729-2.013-3.729-3.464c0-1.967 1.51-3.512 3.374-3.465c1.775-.047 3.817 1.311 4.039 4.448m10 0c.178 3.09-1.997 7.444-6.88 9.551L13 17.08c1.998-1.123 3.507-2.95 4.306-5.15c-2.886-.234-3.729-2.013-3.729-3.464c0-1.967 1.51-3.512 3.374-3.465c1.775-.047 3.817 1.311 4.039 4.448"></path><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M10.99 9.449c.178 3.09-1.998 7.444-6.88 9.551L3 17.08c1.997-1.123 3.507-2.95 4.306-5.15c-2.886-.234-3.729-2.013-3.729-3.464c0-1.967 1.51-3.512 3.374-3.465c1.775-.047 3.817 1.311 4.039 4.448m10 0c.178 3.09-1.997 7.444-6.88 9.551L13 17.08c1.998-1.123 3.507-2.95 4.306-5.15c-2.886-.234-3.729-2.013-3.729-3.464c0-1.967 1.51-3.512 3.374-3.465c1.775-.047 3.817 1.311 4.039 4.448"></path></g></svg>

                                    </h4>
                                    <p className="text-gray-400 text-sm mb-3">{testimonials[1].text}</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 - Bottom Left */}
                        <div className="testimonial-card ml-auto w-[90%] mb-5 bg-slate-800/50 border-slate-600/50  rounded backdrop-blur-sm border  shadow-lg p-6 hover:shadow-xl transition-shadow">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-gray-200">
                                    <img src={testimonials[2].image} alt={testimonials[2].name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-white font-bold text-base mb-1.5 flex items-center justify-between">{testimonials[2].name}
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none"><path fill="currentColor" fillOpacity={0.16} d="M10.99 9.449c.178 3.09-1.998 7.444-6.88 9.551L3 17.08c1.997-1.123 3.507-2.95 4.306-5.15c-2.886-.234-3.729-2.013-3.729-3.464c0-1.967 1.51-3.512 3.374-3.465c1.775-.047 3.817 1.311 4.039 4.448m10 0c.178 3.09-1.997 7.444-6.88 9.551L13 17.08c1.998-1.123 3.507-2.95 4.306-5.15c-2.886-.234-3.729-2.013-3.729-3.464c0-1.967 1.51-3.512 3.374-3.465c1.775-.047 3.817 1.311 4.039 4.448"></path><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M10.99 9.449c.178 3.09-1.998 7.444-6.88 9.551L3 17.08c1.997-1.123 3.507-2.95 4.306-5.15c-2.886-.234-3.729-2.013-3.729-3.464c0-1.967 1.51-3.512 3.374-3.465c1.775-.047 3.817 1.311 4.039 4.448m10 0c.178 3.09-1.997 7.444-6.88 9.551L13 17.08c1.998-1.123 3.507-2.95 4.306-5.15c-2.886-.234-3.729-2.013-3.729-3.464c0-1.967 1.51-3.512 3.374-3.465c1.775-.047 3.817 1.311 4.039 4.448"></path></g></svg>
                                    </h4>
                                    <p className="text-gray-400 text-sm mb-3">{testimonials[2].text}</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>


                {/* Bottom Stats */}
                {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-16 sm:mt-20 pt-12 sm:pt-16 border-t border-slate-800">
                    <div className="text-center">
                        <h3 className="text-3xl sm:text-4xl font-bold text-[var(--primary-color)] mb-2">5,000+</h3>
                        <p className="text-gray-400 text-sm sm:text-base">Happy Clients</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-3xl sm:text-4xl font-bold text-[var(--primary-color)] mb-2">4.9/5</h3>
                        <p className="text-gray-400 text-sm sm:text-base">Average Rating</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-3xl sm:text-4xl font-bold text-[var(--primary-color)] mb-2">98%</h3>
                        <p className="text-gray-400 text-sm sm:text-base">Satisfaction Rate</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-3xl sm:text-4xl font-bold text-[var(--primary-color)] mb-2">15+</h3>
                        <p className="text-gray-400 text-sm sm:text-base">Years Experience</p>
                    </div>
                </div> */}

            </div>
        </section>
    );
};

export default Testimonials;
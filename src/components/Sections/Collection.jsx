import React, { useState } from 'react';


const Collection = () => {
    const [activeCategory, setActiveCategory] = useState('Chronograph Watches');
    const [currentSlide, setCurrentSlide] = useState(0);

    const categories = [
        'Chronograph Watches',
        'Automatic Watches',
        'Dress Watches',
        'Sports Watches'
    ];



    const products = [
        {
            id: 1,
            name: 'Classic Chronograph',
            price: '$ 3,800.00',
            category: 'CHRONOGRAPH WATCHES',
            image: '/src/assets/images/product/8.webp',
            badge: null
        },
        {
            id: 2,
            name: 'Heritage Automatic',
            price: '$ 4,300.00',
            category: 'AUTOMATIC WATCHES',
            image: '/src/assets/images/product/4.webp',
            badge: 'NEW'
        },
        {
            id: 3,
            name: 'Elegant Dress Watch',
            price: '$ 3,400.00',
            category: 'DRESS WATCHES',
            image: '/src/assets/images/product/5.webp',
            badge: 'SALE'
        },
        {
            id: 4,
            name: 'Professional Diver',
            price: '$ 3,850.00',
            category: 'SPORTS WATCHES',
            image: '/src/assets/images/product/7.webp',
            badge: null
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % products.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
    };

    const visibleProducts = () => {
        const result = [];
        for (let i = 0; i < 4; i++) {
            result.push(products[(currentSlide + i) % products.length]);
        }
        return result;
    };

    return (
        <section className="bg-black py-20 px-2 lg:px-8">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-12">
                    <p className="section-label">
                        EXPLORE OUR
                    </p>
                    <h2 className="text-5xl text-white mb-3">
                        Luxurious Haven Collection
                    </h2>

                    <p className="text-gray-400 mb-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus architecto repellat pariatur omnis sapiente fuga in ullam odio voluptatem sint!</p>
                </div>

                {/* Products Grid with Slider */}
                <div className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {visibleProducts().map((product, index) => (
                            <div
                                key={`${product.id}-${index}`}
                                className="group relative bg-slate-800/50 rounded-lg overflow-hidden backdrop-blur-sm border border-slate-700/50 transition-all duration-500 hover:shadow-2xl"
                            >
                                {/* Product Image */}
                                <div className="relative overflow-hidden aspect-square bg-slate-900">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Badge */}
                                    {/* {product.badge && (
                                        <span className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                            {product.badge}
                                        </span>
                                    )} */}

                                    {/* Overlay on Hover */}
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <a href='' className="bg-white text-slate-900 px-6 py-3 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            View Details
                                        </a>
                                    </div>
                                </div>

                                {/* Product Info */}
                                <div className="p-6">
                                    <p className="primary-text text-xs font-medium tracking-wider mb-2">
                                        {product.category}
                                    </p>
                                    <h3 className="text-white hover-[var(primary-color)] text-lg font-serif mb-2 transition-colors">
                                        {product.name}
                                    </h3>

                                    <div className="flex justify-between items-center text-[var(--primary-color)]">
                                        <p className="text-gray-300 text-xl font-medium">
                                            {product.price}
                                        </p>

                                        <button className='cursor-pointer'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-shopping-cart w-5 h-5" ariaHidden="true"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Collection;
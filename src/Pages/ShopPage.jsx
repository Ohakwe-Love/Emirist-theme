import React, { useState } from 'react';
import { ShoppingCart, ChevronRight, Heart, Plus, Minus, Trash2, Search, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Topbar from '../components/Layout/Topbar';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import { Link } from 'react-router-dom';

// Products data
const allProducts = [
    { id: 1, name: 'Classic Chronograph', price: '3800.00', category: 'Chronograph', brand: 'Swiss Master', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop', badge: 'NEW' },
    { id: 2, name: 'Heritage Automatic', price: '4300.00', category: 'Automatic', brand: 'Italian Elegance', image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600&h=600&fit=crop', badge: null },
    { id: 3, name: 'Elegant Dress Watch', price: '3400.00', category: 'Dress', brand: 'German Precision', image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600&h=600&fit=crop', badge: 'SALE' },
    { id: 4, name: 'Professional Diver', price: '3850.00', category: 'Sports', brand: 'Japanese Innovation', image: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=600&h=600&fit=crop', badge: null },
    { id: 5, name: 'Vintage Timepiece', price: '4500.00', category: 'Dress', brand: 'Swiss Master', image: 'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=600&h=600&fit=crop', badge: 'NEW' },
    { id: 6, name: 'Sport Chronograph', price: '3900.00', category: 'Sports', brand: 'German Precision', image: 'https://images.unsplash.com/photo-1587836374182-f78b2c2e8d5f?w=600&h=600&fit=crop', badge: null },
    { id: 7, name: 'Luxury Automatic', price: '5200.00', category: 'Automatic', brand: 'Italian Elegance', image: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600&h=600&fit=crop', badge: null },
    { id: 8, name: 'Modern Classic', price: '3600.00', category: 'Chronograph', brand: 'Japanese Innovation', image: 'https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=600&h=600&fit=crop', badge: 'SALE' },
    { id: 9, name: 'Executive Gold', price: '6200.00', category: 'Dress', brand: 'Swiss Master', image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600&h=600&fit=crop', badge: 'NEW' },
    { id: 10, name: 'Racing Chrono', price: '4100.00', category: 'Sports', brand: 'Italian Elegance', image: 'https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=600&h=600&fit=crop', badge: null },
    { id: 11, name: 'Skeleton Auto', price: '4800.00', category: 'Automatic', brand: 'German Precision', image: 'https://images.unsplash.com/photo-1548171915-e79a380a2a4b?w=600&h=600&fit=crop', badge: null },
    { id: 12, name: 'Minimalist Steel', price: '2900.00', category: 'Dress', brand: 'Japanese Innovation', image: 'https://images.unsplash.com/photo-1533139142390-e5cb0b6f9b7b?w=600&h=600&fit=crop', badge: 'SALE' }
];

// ProductCard component
const ProductCard = ({ product, addToCart }) => {
    const [isAdded, setIsAdded] = React.useState(false);

    const handleAddToCart = () => {
        addToCart(product);
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000); // Reset after 2 seconds
    };

    return (
        <div className="group relative bg-slate-800/50 rounded-lg overflow-hidden backdrop-blur-sm border border-slate-700/50 transition-all duration-500 hover:shadow-2xl">
            {/* Product Image */}
            <div className="relative overflow-hidden aspect-square bg-slate-900">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Badge */}
                {product.badge && (
                    <span className="absolute top-4 right-4 bg-[var(--primary-color)] text-white text-xs font-bold px-3 py-1 rounded-full">
                        {product.badge}
                    </span>
                )}

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                        className="bg-white text-slate-900 px-6 py-3 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 cursor-pointer"
                    >
                        View Product
                    </button>
                </div>
            </div>

            {/* Product Info */}
            <div className="p-6">
                <p className="text-[var(--primary-color)] text-xs font-medium tracking-wider mb-2">
                    {product.category.toUpperCase()}
                </p>
                <h3 className="text-white text-lg font-serif mb-2 group-hover:text-[var(--primary-color)] transition-colors">
                    {product.name}
                </h3>

                <div className="flex justify-between items-center">
                    <p className="text-gray-300 text-lg font-medium">
                        ${product.price}
                    </p>

                    <button className='cursor-pointer text-gray-400 hover:text-[var(--primary-color)] transition'>
                        <Heart className="w-5 h-5" />
                    </button>
                </div>

                <div className="flex">
                    <button
                        onClick={handleAddToCart}
                        className={`px-6 py-3 rounded-full font-medium cursor-pointer w-full block mt-5 transition-all ${isAdded
                            ? 'bg-[var(--primary-color)] text-black'
                            : 'bg-white text-slate-900 hover:bg-gray-100'
                            }`}
                    >
                        {isAdded ? 'Added!' : 'Add to Cart'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default function ShopPage() {
    const { addToCart } = useCart();
    const [filterCategory, setFilterCategory] = useState('All');
    const [filterBrand, setFilterBrand] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 10000]);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('featured');
    const [showFilters, setShowFilters] = useState(false);
    const [displayCount, setDisplayCount] = useState(8);

    const categories = ['All', 'Chronograph', 'Automatic', 'Dress', 'Sports'];
    const brands = ['Swiss Master', 'Italian Elegance', 'German Precision', 'Japanese Innovation'];

    // Apply all filters
    const getFilteredProducts = () => {
        let filtered = [...allProducts];

        // Category filter
        if (filterCategory !== 'All') {
            filtered = filtered.filter(p => p.category === filterCategory);
        }

        // Brand filter
        if (filterBrand.length > 0) {
            filtered = filtered.filter(p => filterBrand.includes(p.brand));
        }

        // Price filter
        filtered = filtered.filter(p => {
            const price = parseFloat(p.price);
            return price >= priceRange[0] && price <= priceRange[1];
        });

        // Search filter
        if (searchQuery) {
            filtered = filtered.filter(p =>
                p.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Sorting
        if (sortBy === 'price-low') {
            filtered.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        } else if (sortBy === 'price-high') {
            filtered.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        } else if (sortBy === 'name') {
            filtered.sort((a, b) => a.name.localeCompare(b.name));
        }

        return filtered;
    };

    const filteredProducts = getFilteredProducts();
    const displayedProducts = filteredProducts.slice(0, displayCount);
    const hasMore = displayCount < filteredProducts.length;

    const handleLoadMore = () => {
        setDisplayCount(prev => prev + 8);
    };

    const toggleBrand = (brand) => {
        setFilterBrand(prev =>
            prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
        );
    };

    return (

        <div className="min-h-screen bg-black">
            <Topbar />

            <Header />

            <section className="flex items-center page-hero shopPage-hero justify-center h-110 group overflow-hidden relative ">
                <div className="text-center">
                    <h1 className="text-5xl font-serif text-white mb-4">Explore our Collection</h1>

                    <p className='text-2xl'>
                        <Link to='/' className='text-white hover:text-[var(--primary-color)] transition'>Home</Link>
                        <ChevronRight className='inline mx-2 text-white' />
                        <span className='text-[var(--primary-color)]'>Shop</span>
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-15 py-20">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Sidebar Filters */}
                    <aside className={`lg:w-64 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                        <div className="bg-slate-900 rounded-lg p-6 sticky top-24">

                            {/* Close button for mobile */}
                            <div className="flex justify-between items-center mb-4 lg:hidden">
                                <h3 className="text-white font-semibold">Filters</h3>
                                <button onClick={() => setShowFilters(false)}>
                                    <X className="w-5 h-5 text-white" />
                                </button>
                            </div>

                            {/* Search */}
                            <div className="mb-6">
                                <label className="text-white text-sm font-medium mb-2 block">Search</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Search products..."
                                        className="w-full bg-slate-800 text-white px-4 py-2 rounded-lg border border-slate-700 focus:border-[var(--primary-color)] focus:outline-none"
                                    />
                                    <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
                                </div>
                            </div>

                            {/* Category Filter */}
                            <div className="mb-6">
                                <h3 className="text-white font-semibold mb-3">Category</h3>
                                <div className="space-y-2">
                                    {categories.map(cat => (

                                        <label className="flex items-center gap-3 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="category"
                                                checked={filterCategory === cat}
                                                onChange={() => setFilterCategory(cat)}
                                                className="peer hidden"
                                            />

                                            {/* Radio circle */}
                                            <span
                                                className="
            h-4 w-4
            border border-gray-500
            rounded-full
            flex items-center justify-center
            peer-checked:border-[var(--primary-color)]
            transition
        "
                                            >
                                                <span
                                                    className="
                h-2 w-2
                rounded-full
                bg-[var(--primary-color)]
                opacity-0
                peer-checked:opacity-100
                transition
            "
                                                />
                                            </span>

                                            {/* Label text */}
                                            <span
                                                className="
            text-sm
            text-gray-300
            transition
            peer-checked:text-[var(--primary-color)]
        "
                                            >
                                                {cat}
                                            </span>
                                        </label>


                                    ))}
                                </div>
                            </div>

                            {/* Brand Filter */}
                            <div className="mb-6">
                                <h3 className="text-white font-semibold mb-3">Brand</h3>
                                <div className="space-y-2">
                                    {brands.map(brand => (
                                        // <label key={brand} className="flex items-center cursor-pointer group">
                                        //     <input
                                        //         type="checkbox"
                                        //         checked={filterBrand.includes(brand)}
                                        //         onChange={() => toggleBrand(brand)}
                                        //         className="mr-2 bg-red-400 accent-[var(--primary-color)]"
                                        //     />
                                        //     <span className="text-gray-400 group-hover:text-white transition text-sm">{brand}</span>
                                        // </label>

                                        <label className="flex items-center gap-3 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={filterBrand.includes(brand)}
                                                onChange={() => toggleBrand(brand)}
                                                className="peer hidden"
                                            />

                                            <span
                                                className="
            h-4 w-4
            border border-gray-500
            rounded
            flex items-center justify-center
            peer-checked:bg-[var(--primary-color)]
            peer-checked:border-[var(--primary-color)]
            transition
        "
                                            >
                                                <span className="h-2 w-2 bg-white rounded opacity-0 peer-checked:opacity-100"></span>
                                            </span>

                                            <span className="text-sm text-gray-300">
                                                {brand}
                                            </span>
                                        </label>

                                    ))}
                                </div>
                            </div>

                            {/* Price Range */}
                            <div>
                                <h3 className="text-white font-semibold mb-3">Price Range</h3>
                                <div className="space-y-3">
                                    <input
                                        type="range"
                                        min="0"
                                        max="10000"
                                        step="100"
                                        value={priceRange[1]}
                                        onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                                        className="w-full accent-[var(--primary-color)]"
                                    />
                                    <div className="flex justify-between text-sm text-gray-400">
                                        <span>${priceRange[0]}</span>
                                        <span>${priceRange[1]}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Clear Filters */}
                            <button
                                onClick={() => {
                                    setFilterCategory('All');
                                    setFilterBrand([]);
                                    setPriceRange([0, 10000]);
                                    setSearchQuery('');
                                }}
                                className="w-full mt-6 py-2 bg-slate-800 text-gray-400 rounded-lg hover:bg-slate-700 hover:text-white transition"
                            >
                                Clear All Filters
                            </button>
                        </div>
                    </aside>

                    {/* Products Grid */}
                    <main className="flex-1">

                        {/* Toolbar */}
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                            <div>
                                <p className="text-gray-400">Showing {displayedProducts.length} of {filteredProducts.length} products</p>
                            </div>

                            <div className="flex gap-3">
                                <button
                                    onClick={() => setShowFilters(!showFilters)}
                                    className="lg:hidden flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition"
                                >
                                    <SlidersHorizontal className="w-5 h-5" />
                                    Filters
                                </button>

                                <div className="relative inline-block">
                                    <select
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                        className="
            appearance-none
            w-full
            px-4 py-2 pr-10
            bg-slate-800
            text-gray-200
            text-sm
            rounded-lg
            border border-slate-700
            focus:border-[var(--primary-color)]
            focus:ring-1 focus:ring-[var(--primary-color)]
            focus:outline-none
            transition
            cursor-pointer
        "
                                    >
                                        <option value="featured">Featured</option>
                                        <option value="price-low">Price: Low to High</option>
                                        <option value="price-high">Price: High to Low</option>
                                        <option value="name">Name: A–Z</option>
                                    </select>

                                    {/* Custom arrow */}
                                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                </div>

                            </div>
                        </div>

                        {/* Products Grid */}
                        {displayedProducts.length > 0 ? (
                            <>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                                    {displayedProducts.map((product) => (
                                        <ProductCard key={product.id} product={product} addToCart={addToCart} />
                                    ))}
                                </div>

                                {/* Load More Button */}
                                {hasMore && (
                                    <div className="text-center">
                                        <button
                                            onClick={handleLoadMore}
                                            className="px-8 py-3 bg-[var(--primary-color)] text-black rounded-lg hover:bg-[var(--primary-color)]/90 transition font-medium"
                                        >
                                            Load More
                                        </button>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="text-center py-20">
                                <p className="text-gray-400 text-lg">No products found matching your criteria</p>
                                <button
                                    onClick={() => {
                                        setFilterCategory('All');
                                        setFilterBrand([]);
                                        setPriceRange([0, 10000]);
                                        setSearchQuery('');
                                    }}
                                    className="mt-4 px-6 py-2 bg-[var(--primary-color)] text-white rounded-lg hover:bg-[var(--primary-color)]/90 transition"
                                >
                                    Clear Filters
                                </button>
                            </div>
                        )}
                    </main>
                </div>
            </div>

            <Footer />
        </div>
    );
}

import React, { useState } from 'react';
import Logo from '../Core/Logo';
import { Heart, ShoppingCart, User, Menu, X } from 'lucide-react';
import { NavLink } from "react-router-dom";
import { useCart } from '../../context/CartContext';


const linkClass = ({ isActive }) =>
    `uppercase tracking-wide transition ${isActive
        ? "text-[var(--primary-color)]"
        : "text-white hover:text-[var(--primary-color)]"
    }`;

const mobileNavLinkClass = ({ isActive }) =>
    `${isActive
        ? "text-[var(--primary-color)]"
        : "text-white hover:text-[var(--primary-color)]"
    } block font-medium uppercase tracking-wide py-2 border-b border-gray-700`;                   

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const { getCartCount } = useCart();


    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <header className="left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 bg-[#101010] sticky top-0">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* LOGO */}
                <NavLink to='/' className='flex text-white items-center gap-2.5 text-3xl'>
                    <Logo />
                    <span className="logo">Emirist</span>
                </NavLink>

                {/* Desktop Navigation */}
                <nav className='hidden lg:flex items-center space-x-8 text-sm'>
                    <NavLink to="/" className={linkClass}> Home </NavLink>

                    <NavLink to="/about" className={linkClass}> About </NavLink>
                    <NavLink to="/shop" className={linkClass}> Shop </NavLink>
                    {/* <NavLink to="/" className={linkClass}> Blog </NavLink> */}
                    <NavLink to="/faq" className={linkClass}> Faq </NavLink>
                    <NavLink to="/contact" className={linkClass}> Contact </NavLink>
                </nav>

                {/* Desktop Actions */}
                <div className="hidden sm:flex items-center space-x-3 sm:space-x-4 text-white">
                    <Heart className="w-5 h-5 cursor-pointer hover:text-[var(--primary-color)] transition" />
                    <NavLink to='/cart' className="relative cursor-pointer hover:text-[var(--primary-color)] transition">
                        <ShoppingCart className="w-5 h-5" />
                        <span className="absolute -top-2 -right-2 bg-[var(--primary-color)] text-black text-[10px] font-medium w-4 h-4 rounded-full flex items-center justify-center">
                            {getCartCount()}
                        </span>
                    </NavLink>

                    <a href="#"><User className="w-5 h-5 cursor-pointer hover:text-[var(--primary-color)] transition" /></a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMobileMenu}
                    className="lg:hidden text-white p-2 hover:text-[var(--primary-color)] transition"
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? (
                        <X className="w-6 h-6" />
                    ) : (
                        <Menu className="w-6 h-6" />
                    )}
                </button>

            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-lg transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <nav className="px-4 py-6 space-y-4">
                    <NavLink to="/" className={mobileNavLinkClass}> Home </NavLink>
                    <NavLink to="/about" className={mobileNavLinkClass}> About </NavLink>
                    <NavLink to="/shop" className={mobileNavLinkClass}> Shop </NavLink>
                    <NavLink to="/faq" className={mobileNavLinkClass}> Faq </NavLink>
                    <NavLink to="/contact" className={mobileNavLinkClass}> Contact </NavLink>

                    {/* Mobile Actions */}
                    <div className="flex items-center justify-center space-x-6 pt-4 sm:hidden">
                        <Heart className="w-6 h-6 text-white cursor-pointer hover:text-[var(--primary-color)] transition" />
                        <NavLink to='/cart' className="relative cursor-pointer hover:text-[var(--primary-color)] transition text-white">
                            <ShoppingCart className="w-5 h-5" />
                            <span className="absolute -top-2 -right-2 bg-[var(--primary-color)] text-black text-[10px] font-medium w-4 h-4 rounded-full flex items-center justify-center">
                                {getCartCount()}
                            </span>
                        </NavLink>
                        <a href="#"><User className="w-6 h-6 text-white cursor-pointer hover:text-[var(--primary-color)] transition" /></a>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
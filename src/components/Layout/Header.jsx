import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MoveRight, ArrowRight, Heart, RefreshCw, ShoppingCart, User } from 'lucide-react';
import Logo from '../Core/Logo';

const Header = () => {
    return (
        <header className="absolute top-0 left-0 right-0 z-50 px-8 py-6 bg-slate-950">
            <div className="container flex items-center justify-between">
                <a href='#' className='flex text-white items-center gap-2.5 text-3xl'>
                    <Logo />
                    <span className="logo">Emirist</span>
                </a>

                <ul className='hidden md:flex items-center space-x-8 text-sm capitalize'>
                    <li><a href="#" className='text-white font-medium'>home</a></li>
                    <li><a href="#" className='text-white font-medium'>about</a></li>
                    <li><a href="#" className='text-white font-medium'>shop</a></li>
                    <li><a href="#" className='text-white font-medium'>blog</a></li>
                    <li><a href="#" className='text-white font-medium'>contact</a></li>
                </ul>

                <div className="flex items-center space-x-4 text-white">
                    <Heart className="header-action w-5 h-5 cursor-pointer header-action transition" />
                    <button className="relative cursor-pointer header-action transition">
                        <ShoppingCart className="w-5 h-5" />
                        <span className="cart-badge absolute -top-2 -right-2 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">0</span>
                    </button>
                    <a href=""><User className="w-5 h-5 cursor-pointer header-action transition" /></a>
                </div>
            </div>
        </header>
    )
}

export default Header
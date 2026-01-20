import React, { useState } from 'react';
import { Twitter, Facebook, Instagram, Plus, Minus } from 'lucide-react';
import SocialIcons from '../Core/SocialIcons';
import Logo from '../Core/Logo';


const Footer = () => {
    const [openSection, setOpenSection] = useState(null);

    const footerLinks = {
        about: [
            { label: 'History', href: '#' },
            { label: 'Our Team', href: '#' },
            { label: 'Privacy Policy', href: '#' },
            { label: 'Services Offered', href: '#' },
            { label: 'Product Catalog', href: '#' }
        ],
        information: [
            { label: 'Store Location', href: '#' },
            { label: 'Order Tracking', href: '#' },
            { label: 'Affiliate', href: '#' },
            { label: 'Sizing Guide', href: '#' },
            { label: 'Accessibility', href: '#' }
        ],
        support: [
            { label: 'Your Account', href: '#' },
            { label: 'Press Release', href: '#' },
            { label: 'Return Centre', href: '#' },
            { label: 'App Download', href: '#' },
            { label: 'Advertisements', href: '#' }
        ]
    };

    // const paymentMethods = [
    //     { name: 'Razorpay', img: '/src/assets/images/payment/razorpay.png' },
    //     { name: 'Stripe', img: '/src/assets/images/payment/stripe.svg' },
    //     { name: 'PayPal', img: '/src/assets/images/payment/paypal.png' },
    // ];

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr]   gap-12">
                    {/* Brand Section - Always Visible */}
                    <div className="mb-8">
                        <a href='#' className='flex text-white items-center gap-2.5 text-3xl mb-4'>
                            <Logo />
                            <span className="logo">Emirist</span>
                        </a>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Donec elementum aliquet dui, ut feugiat est vulputate quis. Etiam egestas nulla nec odio posuere, ut porta tortor pretiumt.
                        </p>

                        {/* Social Icons */}
                        <SocialIcons />
                    </div>

                    {/* Desktop Grid - Hidden on Mobile */}
                    <div className=" hidden lg:grid lg:grid-cols-3 gap-12 mb-12">
                        {/* About Links */}
                        <div>
                            <h3 className="text-white font-semibold text-lg mb-4">About</h3>
                            <ul className="space-y-3">
                                {footerLinks.about.map((link, index) => (
                                    <li key={index}>
                                        <a href={link.href} className="text-gray-400 hover:text-[var(--primary-color)] transition-colors text-sm">
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Information Links */}
                        <div>
                            <h3 className="text-white font-semibold text-lg mb-4">Information</h3>
                            <ul className="space-y-3">
                                {footerLinks.information.map((link, index) => (
                                    <li key={index}>
                                        <a href={link.href} className="text-gray-400 hover:text-[var(--primary-color)] transition-colors text-sm">
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Support Links */}
                        <div>
                            <h3 className="text-white font-semibold text-lg mb-4">Support</h3>
                            <ul className="space-y-3">
                                {footerLinks.support.map((link, index) => (
                                    <li key={index}>
                                        <a href={link.href} className="text-gray-400 hover:text-[var(--primary-color)] transition-colors text-sm">
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Mobile Accordion / Desktop Grid */}
                <div className="lg:hidden space-y-4 mb-8">

                    {/* About Accordion */}
                    <div className="border-b border-gray-800">
                        <button
                            onClick={() => toggleSection('about')}
                            className="w-full flex items-center justify-between py-4 text-left"
                        >
                            <h3 className="text-white font-semibold text-lg">About</h3>
                            {openSection === 'about' ? (
                                <Minus className="w-5 h-5 text-orange-500" />
                            ) : (
                                <Plus className="w-5 h-5 text-orange-500" />
                            )}
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-300 ${openSection === 'about' ? 'max-h-96 pb-4' : 'max-h-0'
                                }`}
                        >
                            <ul className="space-y-3">
                                {footerLinks.about.map((link, index) => (
                                    <li key={index}>
                                        <a href={link.href} className="text-gray-400 hover:text-[var(--primary-color)] transition-colors text-sm block">
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Information Accordion */}
                    <div className="border-b border-gray-800">
                        <button
                            onClick={() => toggleSection('information')}
                            className="w-full flex items-center justify-between py-4 text-left"
                        >
                            <h3 className="text-white font-semibold text-lg">Information</h3>
                            {openSection === 'information' ? (
                                <Minus className="w-5 h-5 text-orange-500" />
                            ) : (
                                <Plus className="w-5 h-5 text-orange-500" />
                            )}
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-300 ${openSection === 'information' ? 'max-h-96 pb-4' : 'max-h-0'
                                }`}
                        >
                            <ul className="space-y-3">
                                {footerLinks.information.map((link, index) => (
                                    <li key={index}>
                                        <a href={link.href} className="text-gray-400 hover:text-[var(--primary-color)] transition-colors text-sm block">
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Support Accordion */}
                    <div className="border-b border-gray-800">
                        <button
                            onClick={() => toggleSection('support')}
                            className="w-full flex items-center justify-between py-4 text-left"
                        >
                            <h3 className="text-white font-semibold text-lg">Support</h3>
                            {openSection === 'support' ? (
                                <Minus className="w-5 h-5 text-orange-500" />
                            ) : (
                                <Plus className="w-5 h-5 text-orange-500" />
                            )}
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-300 ${openSection === 'support' ? 'max-h-96 pb-4' : 'max-h-0'
                                }`}
                        >
                            <ul className="space-y-3">
                                {footerLinks.support.map((link, index) => (
                                    <li key={index}>
                                        <a href={link.href} className="text-gray-400 hover:text-[var(--primary-color)] transition-colors text-sm block">
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">

                    {/* Copyright */}
                    <p className="text-gray-400 text-sm text-center sm:text-center w-full">
                        All Right Reserved © {new Date().getFullYear()} Emirist. Built with ❤️ by
                        <a href="https://www.devove.dev" target="_blank" rel="noopener noreferrer" className="text-[var(--primary-color)] hover:underline"> Devove</a>.
                    </p>

                    {/* Payment Methods */}
                    {/* <div className="flex items-center gap-2">
                        {paymentMethods.map((method, index) => (
                            <div
                                key={index}
                                className="w-12 h-8 rounded flex items-center justify-center"
                                title={method.name}
                            >
                                <img src={method.img} alt={method.name} className="w-full h-full object-contain" />
                            </div>
                        ))}
                    </div> */}

                </div>

            </div>
        </footer>
    );
};

export default Footer;
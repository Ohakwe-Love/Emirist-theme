import { useCart } from '../context/CartContext';
import { ShoppingCart, Trash2, Minus, Plus, ChevronRight } from 'lucide-react';
import Header from '../components/Layout/Header';
import Topbar from '../components/Layout/Topbar';
import Footer from '../components/Layout/Footer';
import { Link } from 'react-router-dom';


export default function CartPage() {
    const { cart, updateQuantity, removeFromCart, clearCart, getCartTotal } = useCart();

    if (cart.length === 0) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center py-20">
                <div className="text-center">
                    <ShoppingCart className="w-24 h-24 text-gray-600 mx-auto mb-4" />
                    <h2 className="text-3xl font-serif text-white mb-4">Your Cart is Empty</h2>
                    <p className="text-gray-400 mb-8">Add some luxury timepieces to get started</p>
                    <a
                        href="/shop"
                        className="inline-block px-8 py-3 bg-[var(--primary-color)] text-white rounded-lg hover:bg-[var(--primary-color)]/90 transition"
                    >
                        Continue Shopping
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Topbar />

                <Header />

                <section className="flex items-center page-hero shopPage-hero justify-center h-110 group overflow-hidden relative ">
                    <div className="text-center">
                        <h1 className="text-5xl font-serif text-white mb-4">Your Shopping Cart</h1>

                        <p className='text-2xl'>
                            <Link to='/shop' className='text-white hover:text-[var(--primary-color)] transition'>Shop</Link>
                            <ChevronRight className='inline mx-2 text-white' />
                            <span className='text-[var(--primary-color)]'>Cart</span>
                        </p>
                    </div>
                </section>

                {/* Page Header */}
                <div className="mb-8 pt-20">
                    <h1 className="text-4xl font-serif text-white mb-2">Shopping Cart</h1>
                    <p className="text-gray-400">{cart.length} {cart.length === 1 ? 'item' : 'items'} in your cart</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 pb-20">

                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-4">
                        {cart.map(item => (
                            <div key={item.id} className="bg-slate-900 rounded-lg p-4 sm:p-6 flex flex-col sm:flex-row gap-4 border border-slate-800">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full sm:w-32 h-32 object-cover rounded-lg"
                                />

                                <div className="flex-1">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <h3 className="text-white text-lg font-semibold">{item.name}</h3>
                                            <p className="text-gray-400 text-sm">{item.category}</p>
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-gray-400 hover:text-red-500 transition"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </div>

                                    <div className="flex justify-between items-center mt-4">
                                        <div className="flex items-center gap-3 bg-slate-800 rounded-lg p-1">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="w-8 h-8 flex items-center justify-center text-white hover:bg-slate-700 rounded transition"
                                            >
                                                <Minus className="w-4 h-4" />
                                            </button>
                                            <span className="text-white w-8 text-center">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="w-8 h-8 flex items-center justify-center text-white hover:bg-slate-700 rounded transition"
                                            >
                                                <Plus className="w-4 h-4" />
                                            </button>
                                        </div>

                                        <p className="text-[var(--primary-color)] text-xl font-bold">
                                            ${(parseFloat(item.price) * item.quantity).toFixed(2)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-slate-900 rounded-lg p-6 border border-slate-800 sticky top-24">
                            <h3 className="text-white text-xl font-semibold mb-6">Order Summary</h3>

                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between text-gray-400">
                                    <span>Subtotal</span>
                                    <span>${getCartTotal().toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-400">
                                    <span>Shipping</span>
                                    <span>Free</span>
                                </div>
                                <div className="flex justify-between text-gray-400">
                                    <span>Tax (10%)</span>
                                    <span>${(getCartTotal() * 0.1).toFixed(2)}</span>
                                </div>
                                <div className="border-t border-slate-700 pt-3 mt-3">
                                    <div className="flex justify-between text-white text-xl font-bold">
                                        <span>Total</span>
                                        <span className="text-[var(--primary-color)]">${(getCartTotal() * 1.1).toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>

                            <Link to="/checkout" className="w-full bg-[var(--primary-color)] text-black py-3 rounded-lg font-medium hover:bg-[var(--primary-color)]/90 transition mb-3 inline-block text-center">
                                Proceed to Checkout
                            </Link>

                            <button
                                onClick={clearCart}
                                className="w-full bg-slate-800 text-gray-400 py-3 rounded-lg font-medium hover:bg-slate-700 hover:text-white transition"
                            >
                                Clear Cart
                            </button>
                        </div>
                    </div>

                </div>

                <Footer />
            </div>
        </div>
    );
}
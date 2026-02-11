import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../common/LanguageSwitcher';

export default function Navbar() {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const navLinks = [
        { name: t('nav.about'), path: '/about' },
        { name: t('nav.classes'), path: '/classes' },
        { name: t('nav.gallery'), path: '/gallery' },
        { name: t('nav.contact'), path: '/contact' },
    ];

    return (
        <>
            <nav className="sticky top-0 left-0 w-full z-[100]">
                {/* Top Info Bar */}
                <div className="bg-aluna-alabaster/40 backdrop-blur-sm border-b border-aluna-stone/10 py-2 sm:py-2.5 px-6">
                    <div className="max-w-7xl mx-auto flex justify-center items-center space-x-8 sm:space-x-12 text-[13px] sm:text-sm tracking-[0.2em] font-medium text-aluna-stone/80">
                        <div className="flex items-center space-x-6 sm:space-x-8">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-aluna-gold transition-colors duration-300 transition-transform hover:scale-110"
                                aria-label="Facebook"
                            >
                                <svg className="w-4.5 sm:w-5 h-4.5 sm:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-aluna-gold transition-colors duration-300 transition-transform hover:scale-110"
                                aria-label="Instagram"
                            >
                                <svg className="w-4.5 sm:w-5 h-4.5 sm:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </a>
                        </div>
                        <span className="w-px h-4 sm:h-5 bg-aluna-stone/20"></span>
                        <a
                            href="mailto:hello@alunastudio.ro"
                            className="hover:text-aluna-gold transition-colors duration-300 flex items-center space-x-2"
                        >
                            <span>hello@alunastudio.ro</span>
                        </a>
                    </div>
                </div>

                {/* Main Navbar Container with dynamic styling */}
                <div
                    className={`transition-all duration-500 relative z-[160] ${(scrolled && !isOpen) ? 'bg-aluna-alabaster/95 backdrop-blur-md shadow-sm py-1' : 'bg-transparent py-3'
                        }`}
                >

                    <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
                        <div className="flex justify-between items-center h-full">
                            {/* Logo */}
                            <div className={`relative z-10 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
                                <Link to="/" className="group">
                                    <img
                                        src="/logo.jpeg"
                                        alt="ALUNA Reformer Studio"
                                        className={`w-auto object-contain transition-all duration-500 ${(scrolled && !isOpen) ? 'h-20 md:h-24' : 'h-32 md:h-48'
                                            }`}
                                    />
                                </Link>
                            </div>

                            {/* Desktop Menu */}
                            <div className={`hidden md:flex space-x-8 items-center relative z-10 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
                                {navLinks.map((item) => (
                                    <Link
                                        key={item.path}
                                        to={item.path}
                                        className="text-aluna-stone hover:text-aluna-gold transition-colors duration-300 text-xs tracking-[0.15em] uppercase font-medium"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                                <LanguageSwitcher />
                                <Link
                                    to="/contact"
                                    className="btn-primary"
                                >
                                    {t('nav.book')}
                                </Link>
                            </div>

                            {/* Mobile Menu Button - Highest z-index */}
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="md:hidden z-[160] relative w-10 h-10 flex items-center justify-center focus:outline-none"
                                aria-label="Toggle Menu"
                            >
                                <div className="w-6 flex flex-col items-end space-y-1.5">
                                    <motion.span
                                        animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                                        className={`block w-full h-0.5 ${isOpen ? 'bg-aluna-charcoal' : 'bg-aluna-charcoal'}`}
                                    />
                                    <motion.span
                                        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                                        className="block w-4 h-0.5 bg-aluna-charcoal"
                                    />
                                    <motion.span
                                        animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                                        className={`block w-full h-0.5 ${isOpen ? 'bg-aluna-charcoal' : 'bg-aluna-charcoal'}`}
                                    />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Overlay - Higher z-index, independent of padding container */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-aluna-alabaster/98 backdrop-blur-xl z-[150] flex flex-col items-center justify-center"
                        >
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: 1,
                                        transition: {
                                            staggerChildren: 0.1
                                        }
                                    }
                                }}
                                className="flex flex-col items-center space-y-8"
                            >
                                {navLinks.map((item) => (
                                    <motion.div
                                        key={item.path}
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            visible: { opacity: 1, y: 0 }
                                        }}
                                    >
                                        <Link
                                            to={item.path}
                                            onClick={() => setIsOpen(false)}
                                            className="text-3xl font-serif text-aluna-charcoal hover:text-aluna-gold transition-colors"
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0 }
                                    }}
                                >
                                    <LanguageSwitcher />
                                </motion.div>

                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0 }
                                    }}
                                >
                                    <Link
                                        to="/contact"
                                        onClick={() => setIsOpen(false)}
                                        className="mt-8 btn-primary px-10 py-4"
                                    >
                                        {t('nav.book')}
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
}

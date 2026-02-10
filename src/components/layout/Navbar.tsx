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
            <nav className="fixed top-0 left-0 w-full z-[100]">
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

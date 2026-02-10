import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-aluna-cream pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <Link to="/" className="block mb-6 group">
                            <img
                                src="/logo.jpeg"
                                alt="ALUNA Reformer Studio"
                                className="h-64 w-auto object-contain"
                            />
                        </Link>
                        <p className="text-aluna-stone font-light text-sm leading-relaxed mb-6">
                            {t('footer.tagline')}
                        </p>
                        <div className="flex space-x-4">
                            {/* Social Icons Placeholder */}
                            <a href="#" className="w-8 h-8 rounded-full border border-aluna-stone/30 flex items-center justify-center text-aluna-stone hover:border-aluna-gold hover:text-aluna-gold transition-colors">
                                <span className="sr-only">Instagram</span>
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-serif text-lg mb-6 text-aluna-charcoal">{t('footer.sections.studio')}</h4>
                        <ul className="space-y-3">
                            {[
                                { name: t('footer.links.about'), path: '/about' },
                                { name: t('footer.links.classes'), path: '/classes' },
                                { name: t('footer.links.instructors'), path: '/about' }, // Instructors is part of About
                                { name: t('footer.links.pricing'), path: '/classes' } // Pricing is part of Classes
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link to={item.path} className="text-aluna-stone hover:text-aluna-gold text-sm transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-serif text-lg mb-6 text-aluna-charcoal">{t('footer.sections.support')}</h4>
                        <ul className="space-y-3">
                            {[
                                { name: t('footer.links.contact'), path: '/contact' },
                                { name: t('footer.links.faq'), path: '#' },
                                { name: t('footer.links.privacy'), path: '#' },
                                { name: t('footer.links.terms'), path: '#' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link to={item.path} className="text-aluna-stone hover:text-aluna-gold text-sm transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-serif text-lg mb-6 text-aluna-charcoal">{t('footer.sections.newsletter')}</h4>
                        <p className="text-aluna-stone font-light text-sm mb-4">
                            {t('footer.newsletter.desc')}
                        </p>
                        <form className="flex flex-col space-y-3">
                            <input
                                type="email"
                                placeholder={t('footer.newsletter.placeholder')}
                                className="bg-transparent border-b border-aluna-stone/30 py-2 text-sm focus:outline-none focus:border-aluna-gold transition-colors placeholder:text-aluna-stone/50"
                            />
                            <button type="button" className="text-left text-xs uppercase tracking-widest text-aluna-charcoal hover:text-aluna-gold transition-colors font-bold">
                                {t('footer.newsletter.button')}
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-aluna-stone/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-aluna-stone/60 font-light">
                    <p>&copy; {currentYear} ALUNA Reformer Studio. {t('footer.rights')}</p>
                    <p className="mt-2 md:mt-0">{t('footer.credit')}</p>
                </div>
            </div>
        </footer>
    );
}

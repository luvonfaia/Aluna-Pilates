import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import PageTransition from '../components/common/PageTransition';

export default function Gallery() {
    const { t } = useTranslation();

    const images = [
        'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=2070',
        'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2069',
        'https://images.unsplash.com/photo-1600618528240-fb9fc964b853?q=80&w=2070',
        'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070',
        'https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=2070',
        'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070',
    ];

    return (
        <PageTransition>
            <div>
                <section className="py-[60px] bg-aluna-alabaster text-center">
                    <h1 className="text-5xl font-serif text-aluna-charcoal mb-4">{t('gallery.title')}</h1>
                    <p className="text-aluna-stone font-light">{t('gallery.subtitle')}</p>
                </section>

                <section className="pb-20 px-4 md:px-8">
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 max-w-7xl mx-auto">
                        {images.map((src, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="break-inside-avoid relative group overflow-hidden"
                            >
                                <img
                                    src={src}
                                    alt={`Studio Gallery ${idx + 1}`}
                                    className="w-full h-auto rounded-sm transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-aluna-charcoal/0 group-hover:bg-aluna-charcoal/10 transition-colors duration-500" />
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>
        </PageTransition>
    );
}

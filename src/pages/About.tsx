import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import PageTransition from '../components/common/PageTransition';

export default function About() {
    const { t } = useTranslation();

    return (
        <PageTransition>
            <div className="pt-20">
                {/* Hero */}
                <section className="relative py-20 bg-aluna-alabaster">
                    <div className="max-w-7xl mx-auto px-6 lg:px-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-3xl"
                        >
                            <h1 className="text-5xl md:text-7xl font-serif text-aluna-charcoal mb-8" dangerouslySetInnerHTML={{ __html: t('about.hero.title').replace(' ', '&nbsp;') }} />
                            <p className="text-xl md:text-2xl text-aluna-stone font-light leading-relaxed">
                                {t('about.hero.desc')}
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Main Content */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-6 lg:px-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                            <div className="order-2 md:order-1">
                                <img
                                    src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070"
                                    alt="Studio Interior"
                                    className="w-full h-[600px] object-cover rounded-sm shadow-xl"
                                />
                            </div>
                            <div className="order-1 md:order-2">
                                <h2 className="text-3xl font-serif text-aluna-charcoal mb-6">{t('about.sanctuary.title')}</h2>
                                <p className="text-aluna-stone text-lg leading-relaxed mb-6 font-light">
                                    {t('about.sanctuary.desc1')}
                                </p>
                                <p className="text-aluna-stone text-lg leading-relaxed font-light">
                                    {t('about.sanctuary.desc2')}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-20 bg-aluna-cream">
                    <div className="max-w-7xl mx-auto px-6 lg:px-12">
                        <h2 className="text-3xl font-serif text-aluna-charcoal mb-12 text-center">{t('about.instructors.title')}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="group">
                                    <div className="w-full h-[400px] bg-aluna-stone/10 mb-6 overflow-hidden relative">
                                        <div className="absolute inset-0 bg-aluna-charcoal/0 group-hover:bg-aluna-charcoal/10 transition-colors duration-500" />
                                        {/* Placeholder for instructor image */}
                                        <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                                            Instructor Image {i}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-serif text-aluna-charcoal mb-1">Instructor Name</h3>
                                    <p className="text-aluna-gold text-xs uppercase tracking-widest mb-3">{t('about.instructors.role')}</p>
                                    <p className="text-aluna-stone/80 text-sm leading-relaxed">
                                        {t('about.instructors.bio')}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </PageTransition>
    );
}

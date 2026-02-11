import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import PageTransition from '../components/common/PageTransition';
import { Link } from 'react-router-dom';

export default function Home() {
    const { t } = useTranslation();

    const classesList = [
        {
            title: t('home.class_types.reformer_flow.title'),
            level: t('home.levels.all'),
            desc: t('home.class_types.reformer_flow.desc')
        },
        {
            title: t('home.class_types.sculpt_tone.title'),
            level: t('home.levels.intermediate'),
            desc: t('home.class_types.sculpt_tone.desc')
        },
        {
            title: t('home.class_types.stretch_restore.title'),
            level: t('home.levels.gentle'),
            desc: t('home.class_types.stretch_restore.desc')
        }
    ];

    return (
        <PageTransition>
            <div className="overflow-hidden">
                {/* Hero Section */}
                <section className="relative h-screen flex items-center justify-center bg-aluna-alabaster">
                    <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070')] bg-cover bg-center" />
                    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl sm:text-6xl md:text-8xl font-serif text-aluna-charcoal mb-6"
                        >
                            {t('home.hero.title')}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl md:text-2xl text-aluna-stone font-light mb-10"
                        >
                            {t('home.hero.subtitle')}
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <Link
                                to="/classes"
                                className="btn-primary"
                            >
                                {t('home.hero.cta')}
                            </Link>
                        </motion.div>
                    </div>
                </section>


                {/* Philosophy Placeholder */}
                <section className="py-32 bg-aluna-alabaster text-center relative overflow-hidden">
                    {/* Decorative Moon */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-aluna-gold/10 pointer-events-none" />

                    <div className="max-w-3xl mx-auto px-6 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-serif mb-8 text-aluna-charcoal italic">{t('home.philosophy.title')}</h2>
                            <p className="text-lg md:text-xl text-aluna-stone leading-relaxed font-light">
                                {t('home.philosophy.quote')}
                            </p>
                            <p className="mt-6 text-base text-aluna-stone/80 leading-relaxed">
                                {t('home.philosophy.desc')}
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Classes Teaser */}
                <section className="py-32 bg-aluna-cream">
                    <div className="max-w-7xl mx-auto px-6 lg:px-12">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                            <div>
                                <h2 className="text-4xl font-serif text-aluna-charcoal mb-4">{t('home.classes_teaser.title')}</h2>
                                <p className="text-aluna-stone font-light max-w-md">{t('home.classes_teaser.subtitle')}</p>
                            </div>
                            <Link to="/classes" className="hidden md:block text-aluna-charcoal hover:text-aluna-gold uppercase tracking-widest text-xs border-b border-aluna-charcoal hover:border-aluna-gold pb-1 transition-colors">
                                {t('home.classes_teaser.view_all')}
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {classesList.map((cls, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                                    className="group bg-aluna-alabaster p-10 hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-500 cursor-pointer"
                                >
                                    <div className="h-1 w-12 bg-aluna-gold mb-8 group-hover:w-20 transition-all duration-500" />
                                    <h3 className="text-2xl font-serif text-aluna-charcoal mb-3">{cls.title}</h3>
                                    <span className="inline-block px-3 py-1 bg-aluna-cream text-aluna-stone text-xs uppercase tracking-wider mb-4 rounded-full">{cls.level}</span>
                                    <p className="text-aluna-stone/80 font-light leading-relaxed mb-8">{cls.desc}</p>
                                    <span className="text-aluna-gold text-sm uppercase tracking-widest group-hover:text-aluna-earth transition-colors">{t('home.classes_teaser.learn_more')}</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-12 text-center md:hidden">
                            <Link to="/classes" className="text-aluna-charcoal hover:text-aluna-gold uppercase tracking-widest text-xs border-b border-aluna-charcoal hover:border-aluna-gold pb-1 transition-colors">
                                {t('home.classes_teaser.view_all')}
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Instructor/Studio Spotlight */}
                <section className="py-0 flex flex-col md:flex-row h-auto md:h-[600px]">
                    <div className="w-full md:w-1/2 h-[400px] md:h-full bg-[url('https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=2070')] bg-cover bg-center" />
                    <div className="w-full md:w-1/2 bg-aluna-charcoal text-aluna-alabaster p-12 md:p-24 flex flex-col justify-center">
                        <h2 className="text-3xl md:text-5xl font-serif mb-8">{t('home.spotlight.title')}</h2>
                        <p className="text-aluna-alabaster/80 font-light leading-relaxed mb-10 max-w-md">
                            {t('home.spotlight.desc')}
                        </p>
                        <div>
                            <Link to="/about" className="btn-secondary border-aluna-alabaster text-aluna-alabaster hover:bg-aluna-alabaster hover:text-aluna-charcoal">
                                {t('home.spotlight.cta')}
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </PageTransition>
    );
}

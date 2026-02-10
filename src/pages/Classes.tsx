import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import PageTransition from '../components/common/PageTransition';

export default function Classes() {
    const { t } = useTranslation();

    const classes = [
        {
            title: t('classes.list.foundations.title'),
            description: t('classes.list.foundations.desc'),
            level: t('home.levels.beginner'),
            intensity: t('classes.intensities.low_medium')
        },
        {
            title: t('classes.list.signature.title'),
            description: t('classes.list.signature.desc'),
            level: t('home.levels.all'),
            intensity: t('classes.intensities.medium')
        },
        {
            title: t('classes.list.dynamic.title'),
            description: t('classes.list.dynamic.desc'),
            level: t('home.levels.intermediate'),
            intensity: t('classes.intensities.high')
        },
        {
            title: t('classes.list.jumpboard.title'),
            description: t('classes.list.jumpboard.desc'),
            level: t('home.levels.intermediate'),
            intensity: t('classes.intensities.high')
        }
    ];

    const packages = [
        { name: t('classes.investment.packages.drop_in'), price: '€35', details: t('classes.investment.details.days_14') },
        { name: t('classes.investment.packages.pack_5'), price: '€165', details: t('classes.investment.details.months_2') },
        { name: t('classes.investment.packages.pack_10'), price: '€300', details: t('classes.investment.details.months_4') },
        { name: t('classes.investment.packages.monthly'), price: '€280', details: t('classes.investment.details.commitment') }
    ];

    return (
        <PageTransition>
            <div className="pt-20">
                <section className="bg-aluna-alabaster py-20 text-center">
                    <div className="max-w-4xl mx-auto px-6">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-6xl font-serif text-aluna-charcoal mb-6"
                        >
                            {t('classes.title')}
                        </motion.h1>
                        <p className="text-xl text-aluna-stone font-light">
                            {t('classes.subtitle')}
                        </p>
                    </div>
                </section>

                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-6 lg:px-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {classes.map((cls, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="border-b border-aluna-stone/20 pb-12 last:border-0"
                                >
                                    <div className="flex justify-between items-baseline mb-4">
                                        <h3 className="text-2xl font-serif text-aluna-charcoal">{cls.title}</h3>
                                        <span className="text-aluna-gold text-xs uppercase tracking-wider">{cls.level}</span>
                                    </div>
                                    <p className="text-aluna-stone/90 mb-4 font-light leading-relaxed">{cls.description}</p>
                                    <p className="text-xs text-aluna-stone/60 uppercase tracking-widest">{t('classes.intensity')}: {cls.intensity}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-aluna-cream">
                    <div className="max-w-7xl mx-auto px-6 lg:px-12">
                        <h2 className="text-3xl font-serif text-center mb-16 text-aluna-charcoal">{t('classes.investment.title')}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {packages.map((pkg, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ y: -5 }}
                                    className="bg-aluna-alabaster p-8 text-center rounded-sm shadow-sm hover:shadow-md transition-all"
                                >
                                    <h3 className="text-lg font-serif mb-4 text-aluna-charcoal">{pkg.name}</h3>
                                    <p className="text-3xl font-light text-aluna-gold mb-6">{pkg.price}</p>
                                    <p className="text-sm text-aluna-stone/70 mb-8">{pkg.details}</p>
                                    <button className="btn-secondary w-full rounded-sm">
                                        {t('classes.investment.purchase')}
                                    </button>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </PageTransition>
    );
}

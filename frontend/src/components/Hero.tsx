import { contactInfo } from '../data/mockData';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="relative min-h-[95vh] flex flex-col items-center justify-center px-6 pt-20 pb-12 overflow-hidden bg-background-dark">
            {/* Animated Background Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.15, 0.25, 0.15],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute -top-[20%] -left-[10%] w-[40vw] h-[40vw] min-w-[500px] min-h-[500px] rounded-full bg-primary/30 blur-[100px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.05, 0.15, 0.05],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                    className="absolute top-[30%] -right-[20%] w-[50vw] h-[50vw] min-w-[600px] min-h-[600px] rounded-full bg-slate-500/20 blur-[120px]"
                />

                {/* Subtle Grid pattern overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
            </div>

            <div className="relative z-10 text-center space-y-8 max-w-5xl mx-auto mt-12 md:mt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex justify-center mb-6"
                >
                    <img
                        src="/images/logo.png"
                        alt="Logo Montiel Advocacia"
                        className="h-24 md:h-32 object-contain"
                    />
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] tracking-tight text-slate-100 drop-shadow-lg"
                >
                    Defesa Criminal <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#fcedb3] to-primary bg-[length:300%_auto] animate-gradient">Estratégica</span> e Consultoria
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="text-slate-300 md:text-slate-400 text-lg md:text-2xl font-light leading-relaxed max-w-3xl mx-auto"
                >
                    Especialista em Ciências Criminais focado em <strong className="font-semibold text-slate-200">resultados tangíveis</strong> para casos sensíveis e de alta complexidade.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <a
                        href={contactInfo.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center justify-center gap-3 w-full sm:w-auto bg-primary text-background-dark px-10 py-5 rounded-full text-base font-bold tracking-wide shadow-[0_0_40px_-10px_rgba(212,175,53,0.6)] hover:shadow-[0_0_60px_-15px_rgba(212,175,53,0.8)] hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Falar com Advogado Agora
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                        {/* Shine Effect */}
                        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-[150%] skew-x-[-45deg] group-hover:animate-shine" />
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3"
            >
                <span className="text-xs text-slate-500 uppercase tracking-widest font-medium">Role para baixo</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="text-primary/70"
                >
                    <ChevronDown size={24} />
                </motion.div>
            </motion.div>
        </section>
    );
};

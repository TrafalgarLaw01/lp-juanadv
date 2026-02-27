import { motion } from 'framer-motion';
import { ShoppingCart, ExternalLink, BookOpen } from 'lucide-react';

export const BookSection = () => {
    return (
        <section id="livro" className="bg-background-dark py-24 px-6 border-y border-border-muted/20 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative mx-auto lg:my-0 lg:ml-auto w-full max-w-lg rounded-sm overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-primary/20 group bg-white/5 flex items-center justify-center p-2"
                    >
                        <img
                            src="/images/livro.jpg"
                            alt="Lançamento do Livro Plea Bargaining System"
                            className="w-full h-auto max-h-[600px] object-contain group-hover:scale-[1.02] transition-transform duration-700"
                        />
                    </motion.div>

                    {/* Content Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8 relative z-20"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-primary/30 bg-primary/10">
                            <BookOpen size={14} className="text-primary" />
                            <span className="text-primary text-[10px] sm:text-xs font-bold tracking-widest uppercase">Obra Publicada</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-black text-slate-100 tracking-tight leading-[1.1]">
                            Plea Bargaining <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#fcedb3]">System</span>
                        </h2>

                        <div className="space-y-4 text-slate-300 font-light leading-relaxed text-base md:text-lg">
                            <p>
                                O livro traça a sistematização histórica do <span className="italic">plea bargaining</span> desde suas raízes na Inglaterra até sua consolidação nos Estados Unidos no século XIX. A obra analisa criticamente como a negociação no processo criminal promove uma constante erosão nos conceitos clássicos de voluntariedade e coerção, tornando-se uma lógica irreversível no direito contemporâneo.
                            </p>
                            <p>
                                Obra Crítica sobre instituto que dá novo impulso aos Acordos Penais nas legislações do ocidente, de modo a contextualizar a prática no Brasil.
                            </p>
                        </div>



                        <div className="pt-8 border-t border-border-muted/30 mt-8">
                            <p className="text-sm font-medium text-slate-400 mb-6 uppercase tracking-wider">Adquira seu exemplar:</p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="https://www.amazon.com.br/Bargaining-System-Marcel-Montiel-Santander/dp/6555108282/ref=sr_1_3?dib=eyJ2IjoiMSJ9.3YsgDdDTIVW9HnA0kKP2Aw.dKY29uZ7QW4BeSFTfyptV-Itz1huKTrRrDYveKyzhVE&dib_tag=se&qid=1772129979&refinements=p_27%3AJuan+Marcel+Montiel+Santander&s=books&sr=1-3&text=Juan+Marcel+Montiel+Santander"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 bg-[#FF9900]/10 border border-[#FF9900]/30 text-[#FF9900] hover:bg-[#FF9900] hover:text-black hover:border-[#FF9900] py-3.5 px-6 rounded-sm font-bold transition-all duration-300"
                                >
                                    <ShoppingCart size={18} />
                                    <span>Comprar na Amazon</span>
                                </a>

                                <a
                                    href="https://www.lumenjuris.com.br"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 bg-transparent border border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-slate-500 py-3.5 px-6 rounded-sm font-bold transition-all duration-300"
                                >
                                    <ExternalLink size={18} />
                                    <span>Editora Lumen Juris</span>
                                </a>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
};

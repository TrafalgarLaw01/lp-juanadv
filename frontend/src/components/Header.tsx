import { useState } from 'react';
import { contactInfo } from '../data/mockData';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface HeaderProps {
    isDark: boolean;
    toggleTheme: () => void;
}

export const Header = ({ isDark, toggleTheme }: HeaderProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="fixed top-0 w-full z-50 glass-header border-b border-border-muted/30">
            <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
                <div className="flex items-center">
                    <img
                        src="/images/logo.png"
                        alt="Montiel Advocacia"
                        className="h-10 w-auto object-contain rounded-sm"
                    />
                </div>
                <div className="flex items-center gap-4">
                    <button onClick={toggleTheme} className="text-slate-100 p-2 hover:bg-surface-dark rounded-full transition-colors hidden md:block">
                        {isDark ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <button onClick={toggleTheme} className="text-slate-100 p-2 md:hidden">
                        {isDark ? <Sun size={24} /> : <Moon size={24} />}
                    </button>
                    <button onClick={toggleMenu} className="text-slate-100 p-1 md:hidden">
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    <nav className="hidden md:flex gap-6 items-center">
                        <a href="#sobre" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Sobre</a>
                        <a href="#livro" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Livro</a>
                        <a href="#atuacao" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Atuação</a>
                        <a href="#localizacao" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Localização</a>
                        <a href="#faq" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">FAQ</a>
                    </nav>

                    <a
                        href={contactInfo.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary text-background-dark px-3 py-1.5 rounded-sm text-xs font-bold items-center gap-1 hover:brightness-110 transition-all hidden md:flex"
                    >
                        WHATSAPP
                    </a>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-background-dark/95 backdrop-blur-md border-b border-border-muted/30 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-64 py-4' : 'max-h-0 py-0 border-transparent'}`}>
                <nav className="flex flex-col items-center gap-4">
                    <a href="#sobre" onClick={toggleMenu} className="text-sm font-medium text-slate-300 hover:text-white transition-colors w-full text-center py-2">Sobre</a>
                    <a href="#livro" onClick={toggleMenu} className="text-sm font-medium text-slate-300 hover:text-white transition-colors w-full text-center py-2">Livro</a>
                    <a href="#atuacao" onClick={toggleMenu} className="text-sm font-medium text-slate-300 hover:text-white transition-colors w-full text-center py-2">Atuação</a>
                    <a href="#localizacao" onClick={toggleMenu} className="text-sm font-medium text-slate-300 hover:text-white transition-colors w-full text-center py-2">Localização</a>
                    <a href="#faq" onClick={toggleMenu} className="text-sm font-medium text-slate-300 hover:text-white transition-colors w-full text-center py-2 mb-2">FAQ</a>
                </nav>
            </div>
        </header>
    );
};

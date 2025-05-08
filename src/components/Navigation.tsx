
import React, { useState } from 'react';
import KnightLogo from './KnightLogo';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, language } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <KnightLogo className="animate-float" />
          <span className="font-bold text-xl md:text-2xl tracking-tight">
            Samion Magnus
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-sm font-medium hover:text-chess-knight-red transition-colors">{t('nav.about')}</a>
          <a href="#achievements" className="text-sm font-medium hover:text-chess-knight-red transition-colors">{t('nav.achievements')}</a>
          <a href="#training" className="text-sm font-medium hover:text-chess-knight-red transition-colors">{t('nav.training')}</a>
          <a href="#tournaments" className="text-sm font-medium hover:text-chess-knight-red transition-colors">{t('nav.tournaments')}</a>
          <a href="#gallery" className="text-sm font-medium hover:text-chess-knight-red transition-colors">{t('nav.gallery')}</a>
          <LanguageSelector />
          <Button className="bg-chess-knight-red hover:bg-chess-knight-red/90">{t('nav.contact')}</Button>
        </nav>

        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b p-4 flex flex-col gap-4">
          <a 
            href="#about" 
            className="text-sm font-medium hover:text-chess-knight-red transition-colors p-2"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('nav.about')}
          </a>
          <a 
            href="#achievements" 
            className="text-sm font-medium hover:text-chess-knight-red transition-colors p-2"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('nav.achievements')}
          </a>
          <a 
            href="#training" 
            className="text-sm font-medium hover:text-chess-knight-red transition-colors p-2"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('nav.training')}
          </a>
          <a 
            href="#tournaments" 
            className="text-sm font-medium hover:text-chess-knight-red transition-colors p-2"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('nav.tournaments')}
          </a>
          <a 
            href="#gallery" 
            className="text-sm font-medium hover:text-chess-knight-red transition-colors p-2"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('nav.gallery')}
          </a>
          <LanguageSelector />
          <Button 
            className="bg-chess-knight-red hover:bg-chess-knight-red/90 w-full"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('nav.contact')}
          </Button>
        </div>
      )}
    </header>
  );
};

export default Navigation;

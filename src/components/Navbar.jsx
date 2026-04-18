import { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { cartCount, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-charcoal/95 backdrop-blur-md shadow-lg shadow-saffron/10' 
        : 'bg-charcoal/80 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 bg-gradient-to-br from-saffron to-curry rounded-full flex items-center justify-center shadow-lg">
              <span className="text-charcoal font-bold text-lg sm:text-xl">M</span>
            </div>
            <div className="hidden xs:block">
              <h1 className="text-xs font-bold sm:text-lg  text-white">Mangla Chat Wale</h1>
              <p className="text-[10px] text-saffron">Since 2005</p>
            </div>
          </div>

          <div className="hidden xs:flex items-center space-x-2.5 sm:space-x-8">
            {['Home', 'Menu', 'About', 'Reviews'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-xs sm:text-base font-bold text-white/80 hover:text-saffron transition-colors duration-200 font-xs"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-4 text-white hover:text-saffron transition-colors duration-200"
            >
              <ShoppingBag size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-spice text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xs:hidden p-2 text-white hover:text-saffron transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="xs:hidden bg-charcoal/95 backdrop-blur-md border-t border-saffron/20 py-3">
            {['Home', 'Menu', 'About', 'Reviews'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-4 py-3 text-white/80 hover:text-saffron hover:bg-saffron/10 transition-colors duration-200 font-medium"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

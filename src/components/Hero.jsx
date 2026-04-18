import { ChevronDown, Phone } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Hero() {
  const { setIsCartOpen } = useCart();

  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      <div className="absolute inset-0">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Crispy_Pani_Puri.jpg"
          alt="Delicious Chaat"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 text-center px-3 sm:px-4 max-w-3xl sm:max-w-5xl mx-auto">
        <div className="mb-4 sm:mb-6 inline-block">
          <span className="bg-saffron/20 text-saffron px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-saffron/30">
            🏆 Authentic Delhi-Style Chaat
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-2 sm:mb-4">
          <span className="text-gradient">Mangla Chat Wale</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-2 font-light">
          Crispy • Tangy • Fresh Chaat
        </p>

        <p className="text-base sm:text-lg text-saffron mb-6 sm:mb-8 font-semibold">
          Since 2005
        </p>

        <p className="text-sm sm:text-lg md:text-xl text-white/70 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
          Experience the authentic taste of Delhi's beloved street chaat, 
          crafted with love and tradition!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-2">
          <button
            onClick={scrollToMenu}
            className="btn-primary text-base sm:text-lg py-2.5 sm:py-3 px-6 sm:px-8 flex items-center justify-center gap-2 group w-full sm:w-auto"
          >
            Order Now
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
          <a
            href="https://wa.me/919971715121"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-base sm:text-lg py-2.5 sm:py-3 px-6 sm:px-8 flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <Phone size={18} />
            WhatsApp Us
          </a>
        </div>

        <div className="mt-10 sm:mt-16 flex flex-wrap justify-center gap-6 sm:gap-8 text-white/60">
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold text-saffron">20+</p>
            <p className="text-xs sm:text-sm">Years</p>
          </div>
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold text-saffron">100%</p>
            <p className="text-xs sm:text-sm">Fresh</p>
          </div>
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold text-saffron">1000+</p>
            <p className="text-xs sm:text-sm">Customers</p>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToMenu}
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-saffron transition-colors duration-300 animate-bounce"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
}

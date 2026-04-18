import { MapPin, Phone, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-charcoal border-t border-white/10">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          <div className="lg:col-span-2 sm:col-span-2">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <div className="w-12 sm:w-14 h-12 sm:h-14 bg-gradient-to-br from-saffron to-curry rounded-full flex items-center justify-center shadow-lg shadow-saffron/20">
                <span className="text-charcoal font-bold text-xl sm:text-2xl">M</span>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Mangla Chat Wale</h3>
                <p className="text-saffron text-sm">Since 2005</p>
              </div>
            </div>
            <p className="text-white/60 mb-4 sm:mb-6 max-w-md leading-relaxed text-sm sm:text-base">
              Bringing the authentic taste of Delhi's beloved street chaat to your neighborhood.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-9 sm:w-10 h-9 sm:h-10 bg-white/10 rounded-full flex items-center justify-center text-white/60 hover:bg-saffron hover:text-charcoal transition-all duration-300"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="w-9 sm:w-10 h-9 sm:h-10 bg-white/10 rounded-full flex items-center justify-center text-white/60 hover:bg-saffron hover:text-charcoal transition-all duration-300"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="w-9 sm:w-10 h-9 sm:h-10 bg-white/10 rounded-full flex items-center justify-center text-white/60 hover:bg-saffron hover:text-charcoal transition-all duration-300"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {[{label:'Home',id:'hero'}, {label:'Menu',id:'menu'}, {label:'About',id:'about'}, {label:'Reviews',id:'reviews'}].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-white/60 hover:text-saffron transition-colors duration-200 text-left text-sm sm:text-base"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-6">Contact Us</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-2 sm:gap-3">
                <MapPin size={16} sm:size={20} className="text-saffron mt-0.5 sm:mt-1 flex-shrink-0" />
                <span
                href="https://maps.app.goo.gl/chTaJHwHxKts6QX38" 
                className="text-white/60 hover:text-saffron transition-colors duration-200 text-xs sm:text-sm">
                  Maine Market, Pocket 5,<br />
                  Acharya Niketan, Mayur Vihar,<br />
                  New Delhi, Delhi 110091
                </span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Clock size={16} sm:size={20} className="text-saffron flex-shrink-0" />
                <span className="text-white/60 text-xs sm:text-sm">6PM – 10PM (Daily)</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Phone size={16} sm:size={20} className="text-saffron flex-shrink-0" />
                <a
                  href="tel:+919971715121"
                  className="text-white/60 hover:text-saffron transition-colors duration-200 text-xs sm:text-sm"
                >
                  +91 999 715 121
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/40 text-xs sm:text-sm text-center sm:text-left">
              © {currentYear} Mangla Chat Wale. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-white/40 text-xs sm:text-sm">
              <span>Powered by</span>
              <span className="text-saffron">Mangla Chat Wale</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

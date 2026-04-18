import { useEffect, useState } from 'react';
import { MapPin, Clock, Award, Heart } from 'lucide-react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-12 sm:py-20 px-3 sm:px-4 bg-gradient-to-b from-charcoal/80 to-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className={`grid md:grid-cols-2 gap-8 sm:gap-12 items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative order-1 md:order-1">
            <div className="absolute -top-4 -left-4 w-32 sm:w-48 h-32 sm:h-48 bg-saffron/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 sm:w-48 h-32 sm:h-48 bg-spice/20 rounded-full blur-3xl"></div>
            <div className="relative grid grid-cols-2 gap-2 sm:gap-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Crispy_Pani_Puri.jpg"
                alt="Chaat preparation"
                className="rounded-xl sm:rounded-2xl shadow-2xl"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b1/BHALE_PAPDI.jpg"
                alt="Serving chaat"
                className="rounded-xl sm:rounded-2xl shadow-2xl mt-4 sm:mt-8"
              />
            </div>
            <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-saffron text-charcoal p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl">
              <p className="text-2xl sm:text-4xl font-bold">20+</p>
              <p className="text-xs sm:text-sm font-medium">Years of Trust</p>
            </div>
          </div>

          <div className="order-2 md:order-2">
            <span className="text-saffron font-medium tracking-wider uppercase text-xs sm:text-sm">Our Story</span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mt-2 mb-4 sm:mb-6">
              A Legacy of <span className="text-gradient">Flavors</span>
            </h2>
            <p className="text-white/70 text-sm sm:text-lg leading-relaxed mb-4 sm:mb-6">
              Since 2005, Mangla Chat Wale has been serving the authentic taste of Delhi's vibrant street food culture. 
              What started as a small cart in Mayur Vihar has grown into a beloved destination for chaat lovers!
            </p>
            <p className="text-white/70 text-sm sm:text-lg leading-relaxed mb-6 sm:mb-8">
              Our recipes are rooted in tradition, using time-honored techniques and freshest ingredients. 
              Every golgappa is crisp, every chaat perfectly spiced!
            </p>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="flex items-center gap-2 sm:gap-3 text-white/80">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-saffron/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={14} sm:size={18} className="text-saffron" />
                </div>
                <span className="text-xs sm:text-sm">Mayur Vihar</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-white/80">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-saffron/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock size={14} sm:size={18} className="text-saffron" />
                </div>
                <span className="text-xs sm:text-sm">6PM-10PM</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-white/80">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-saffron/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award size={14} sm:size={18} className="text-saffron" />
                </div>
                <span className="text-xs sm:text-sm">Premium</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-white/80">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-saffron/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart size={14} sm:size={18} className="text-saffron" />
                </div>
                <span className="text-xs sm:text-sm">with Love</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-saffron/10 to-curry/10 border border-saffron/20 rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <p className="text-white/90 italic text-sm sm:text-lg">
                "Our mission: bring authentic Delhi street chaat to every plate!"
              </p>
              <p className="text-saffron font-medium mt-2 sm:mt-3 text-sm sm:text-base">— The Mangla Family</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

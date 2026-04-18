import { useEffect, useState } from 'react';
import { Star, Quote } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Mayur Vihar, Delhi',
    rating: 5,
    date: 'March 2026',
    text: 'The best golgappa ever! Tangy tamarind water is perfect. Whole family loves it!'
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    location: 'Laxmi Nagar, Delhi',
    rating: 5,
    date: 'February 2026',
    text: 'Authentic Delhi-style chaat reminding me of childhood. Papdi is crispy!'
  },
  {
    id: 3,
    name: 'Sunita Devi',
    location: 'Govindpuri, Delhi',
    rating: 5,
    date: 'March 2026',
    text: 'Alu tikki is amazing, fresh ingredients & friendly service!'
  },
  {
    id: 4,
    name: 'Amit Mishra',
    location: 'New Ashok Nagar, Delhi',
    rating: 5,
    date: 'January 2026',
    text: 'Taste is consistent, quality never disappoints. Highly recommended!'
  },
  {
    id: 5,
    name: 'Meera Gupta',
    location: 'Mayur Vihar Phase 1',
    rating: 5,
    date: 'March 2026',
    text: 'Perfect evening snack! WhatsApp ordering is so convenient!'
  }
];

export default function Reviews() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('reviews');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="reviews" className="py-12 sm:py-20 px-3 sm:px-4 bg-gradient-to-b from-charcoal to-charcoal/95 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-40 sm:w-96 h-40 sm:h-96 bg-saffron rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-40 sm:w-96 h-40 sm:h-96 bg-spice rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-10 sm:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-saffron font-medium tracking-wider uppercase text-xs sm:text-sm">Testimonials</span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mt-2 mb-3 sm:mb-4">
            What Our <span className="text-gradient">Customers</span> Say
          </h2>
          <p className="text-white/60 text-sm sm:text-base max-w-2xl mx-auto px-2">
            Hear from our happy customers who keep coming back for more!
          </p>
          <div className="flex items-center justify-center gap-1 sm:gap-2 mt-4 sm:mt-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} size={18} sm:size={24} className="text-saffron fill-saffron" />
            ))}
            <span className="text-white/80 ml-1 sm:ml-2 text-xs sm:text-base">5.0 Rating</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {REVIEWS.map((review, index) => (
            <div
              key={review.id}
              className={`bg-charcoal/50 backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 hover:border-saffron/30 transition-all duration-500 ${
                isVisible ? 'stagger-item' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-1 mb-3 sm:mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={14} sm:size={16} className="text-saffron fill-saffron" />
                ))}
              </div>

              <Quote className="text-saffron/30 mb-3 sm:mb-4" size={24} />

              <p className="text-white/80 text-sm leading-relaxed mb-4 sm:mb-6 italic">
                "{review.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-saffron to-curry rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-charcoal font-bold text-sm sm:text-lg">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm sm:text-base">{review.name}</p>
                  <p className="text-white/50 text-xs sm:text-sm">{review.location}</p>
                </div>
              </div>

              <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-white/10">
                <p className="text-saffron text-xs sm:text-sm">{review.date}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-8 sm:mt-12 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 sm:gap-4 bg-saffron/10 border border-saffron/20 rounded-full px-4 sm:px-8 py-3 sm:py-4">
            <div className="flex -space-x-2 sm:-space-x-3">
              {['P', 'R', 'A', 'S'].map((initial, i) => (
                <div
                  key={i}
                  className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-br from-saffron to-curry rounded-full border-2 border-charcoal flex items-center justify-center"
                >
                  <span className="text-charcoal text-xs font-bold">{initial}</span>
                </div>
              ))}
            </div>
            <p className="text-white/80 text-xs sm:text-base">
              <span className="text-saffron font-bold">1000+</span> happy customers!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

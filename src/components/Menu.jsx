import { useState, useEffect } from 'react';
import { Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Menu() {
  const { menuItems, cart, addToCart, updateQuantity, setIsCartOpen } = useCart();
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

    const section = document.getElementById('menu');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const getCartQuantity = (itemId) => {
    const item = cart.find(i => i.id === itemId);
    return item ? item.quantity : 0;
  };

  const handleAddToCart = (itemId) => {
    addToCart(itemId);
  };

  const handleIncrease = (itemId) => {
    const qty = getCartQuantity(itemId);
    updateQuantity(itemId, qty + 1);
  };

  const handleDecrease = (itemId) => {
    const qty = getCartQuantity(itemId);
    if (qty > 1) {
      updateQuantity(itemId, qty - 1);
    }
  };

  return (
    <section id="menu" className="py-12 sm:py-20 px-3 sm:px-4 bg-gradient-to-b from-charcoal via-charcoal to-charcoal/80">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-10 sm:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-saffron font-medium tracking-wider uppercase text-xs sm:text-sm">Our Specialties</span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mt-2 mb-3 sm:mb-4">
            <span className="text-gradient">Taste the Streets</span> of Delhi
          </h2>
          <p className="text-white/60 text-sm sm:text-base max-w-2xl mx-auto px-2">
            Handcrafted with authentic spices and traditional recipes
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {menuItems.map((item, index) => {
            const quantity = getCartQuantity(item.id);
            const isInCart = quantity > 0;

            return (
              <div
                key={item.id}
                className={`menu-card group bg-charcoal/80 rounded-2xl sm:rounded-3xl overflow-hidden border border-white/5 hover:border-saffron/30 ${
                  isVisible ? 'stagger-item' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-36 sm:h-40 md:h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="food-image w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Crispy_Pani_Puri.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent"></div>
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-saffron text-charcoal font-bold px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                    ₹{item.price}
                  </div>
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                    <span className="bg-mint/90 text-white text-xs font-medium px-2 sm:px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2 group-hover:text-saffron transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-white/50 text-xs sm:text-sm mb-4 sm:mb-6 line-clamp-2">
                    {item.description}
                  </p>

                  {isInCart ? (
                    <div className="flex items-center justify-between bg-saffron/10 rounded-full p-2">
                      <button
                        onClick={() => handleDecrease(item.id)}
                        className="quantity-btn w-8 h-8 text-sm"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="text-saffron font-bold text-lg w-8 text-center">
                        {quantity}
                      </span>
                      <button
                        onClick={() => handleIncrease(item.id)}
                        className="quantity-btn w-8 h-8 text-sm"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleAddToCart(item.id)}
                      className="w-full bg-gradient-to-r from-saffron to-curry text-charcoal font-bold py-2.5 sm:py-3 rounded-full flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-saffron/30 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                    >
                      <ShoppingBag size={16} />
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <button
            onClick={() => setIsCartOpen(true)}
            className="btn-primary text-sm sm:text-base"
          >
            View Full Cart
          </button>
        </div>
      </div>
    </section>
  );
}

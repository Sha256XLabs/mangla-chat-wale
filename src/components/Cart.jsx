import { X, Plus, Minus, Trash2, ShoppingBag, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { 
    cart, 
    cartTotal, 
    cartCount, 
    isCartOpen, 
    setIsCartOpen, 
    updateQuantity, 
    removeFromCart, 
    clearCart, 
    openWhatsApp 
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
        onClick={() => setIsCartOpen(false)}
      />
      
      <div className="fixed top-0 right-0 h-full w-full sm:w-96 bg-charcoal border-l border-white/10 z-50 cart-sidebar flex flex-col shadow-2xl">
        <div className="p-4 sm:p-6 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <ShoppingBag className="text-saffron" size={20} />
              <h2 className="text-lg sm:text-xl font-bold text-white">Your Cart</h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-colors duration-200"
            >
              <X size={20} />
            </button>
          </div>
          <p className="text-white/50 text-xs sm:text-sm mt-1">
            {cartCount} {cartCount === 1 ? 'item' : 'items'}
          </p>
        </div>

        <div className="flex-1 overflow-y-auto p-3 sm:p-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-4">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white/5 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <ShoppingBag size={32} className="text-white/20" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Cart is empty</h3>
              <p className="text-white/50 text-sm mb-6">Add delicious chaat to get started!</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="btn-primary text-sm py-2.5 px-6"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            <div className="space-y-3 sm:space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-white/5 rounded-xl p-3 sm:p-4 border border-white/5 hover:border-saffron/20 transition-colors duration-200"
                >
                  <div className="flex gap-3 sm:gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg sm:rounded-xl object-cover flex-shrink-0"
                      onError={(e) => {
                        e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Crispy_Pani_Puri.jpg';
                      }}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-white font-semibold text-sm sm:text-base truncate">{item.name}</h3>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-1 text-white/40 hover:text-spice transition-colors duration-200 flex-shrink-0"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                      <p className="text-saffron font-bold text-sm sm:text-base mt-0.5 sm:mt-1">₹{item.price}</p>
                      
                      <div className="flex items-center justify-between mt-2 sm:mt-3">
                        <div className="flex items-center gap-1 sm:gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-saffron hover:text-charcoal transition-all duration-200 text-xs sm:text-sm"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="text-white font-semibold w-6 sm:w-8 text-center text-sm">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-saffron hover:text-charcoal transition-all duration-200 text-xs sm:text-sm"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <p className="text-saffron font-bold text-sm sm:text-base">
                          ₹{item.price * item.quantity}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-4 sm:p-6 border-t border-white/10 bg-charcoal/80">
            <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              <div className="flex justify-between text-white/60 text-sm">
                <span>Subtotal</span>
                <span>₹{cartTotal}</span>
              </div>
              <div className="flex justify-between text-white/60 text-sm">
                <span>Delivery</span>
                <span className="text-mint">Free</span>
              </div>
              <div className="h-px bg-white/10"></div>
              <div className="flex justify-between text-white font-bold text-lg sm:text-xl">
                <span>Total</span>
                <span className="text-saffron">₹{cartTotal}</span>
              </div>
            </div>

            <button
              onClick={() => {
                openWhatsApp();
                clearCart();
                setIsCartOpen(false);
              }}
              className="w-full btn-whatsapp flex items-center justify-center gap-2 text-sm sm:text-lg py-2.5 sm:py-3"
            >
              <MessageCircle size={18} />
              Order via WhatsApp
            </button>

            <button
              onClick={clearCart}
              className="w-full mt-3 py-2 text-white/40 hover:text-spice transition-colors duration-200 text-xs sm:text-sm"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
}

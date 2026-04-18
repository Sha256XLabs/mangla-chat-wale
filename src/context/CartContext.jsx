import { createContext, useContext, useState, useCallback, useMemo } from 'react';

const CartContext = createContext();

const MENU_ITEMS = [
  { 
    id: 1, 
    name: 'Golgappa', 
    price: 30, 
    description: 'Crispy puris filled with tangy tamarind water, chickpeas & potatoes',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Crispy_Pani_Puri.jpg',
    category: 'street-food'
  },
  { 
    id: 2, 
    name: 'Papdi Chaat', 
    price: 80, 
    description: 'Crispy papdis topped with yogurt, chutneys, chickpeas & pomegranate',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/BHALE_PAPDI.jpg',
    category: 'chaat'
  },
  { 
    id: 3, 
    name: 'Alu Chaat', 
    price: 80, 
    description: 'Spiced boiled potatoes with tangy chutneys & fresh herbs',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Moghul_aloo_papri_chaat_%283520800408%29.jpg',
    category: 'chaat'
  },
  { 
    id: 4, 
    name: 'Alu Tikki', 
    price: 80, 
    description: 'Golden crispy potato patties with spicy toppings & chutneys',
    image: 'https://source.roboflow.com/FvxzG1GrQjSAZtLudaOcAz8fpv52/06LcXtVBasm7faEvPEZY/original.jpg',
    category: 'tikki'
  }
];

const BUSINESS_INFO = {
  name: 'Mangla Chat Wale',
  tagline: 'Crispy • Tangy • Fresh Chaat – Since 2005',
  phone: '919971715121',
  whatsappUrl: 'https://wa.me/919971715121',
  address: 'Maine Market, Pocket 5, Acharya Niketan, Mayur Vihar, New Delhi, Delhi 110091',
  timings: '6:00 PM – 10:00 PM (daily)'
};

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = useCallback((itemId) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === itemId);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      const menuItem = MENU_ITEMS.find(item => item.id === itemId);
      return [...prevCart, { ...menuItem, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((itemId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  }, []);

  const updateQuantity = useCallback((itemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  }, [removeFromCart]);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const cartTotal = useMemo(() =>
    cart.reduce((total, item) => total + (item.price * item.quantity), 0),
    [cart]
  );

  const cartCount = useMemo(() =>
    cart.reduce((count, item) => count + item.quantity, 0),
    [cart]
  );

  const generateWhatsAppMessage = useCallback(() => {
    if (cart.length === 0) return '';
    
    let message = `*🍛 New Order from Mangla Chat Wale Website*\n\n`;
    message += `*Order Details:*\n`;
    message += `${'─'.repeat(25)}\n`;
    
    cart.forEach(item => {
      message += `• ${item.name} x${item.quantity} = ₹${item.price * item.quantity}\n`;
    });
    
    message += `${'─'.repeat(25)}\n`;
    message += `*TOTAL: ₹${cartTotal}*\n\n`;
    message += `Please confirm my order. Thank you! 🙏`;
    
    return encodeURIComponent(message);
  }, [cart, cartTotal]);

  const openWhatsApp = useCallback(() => {
    const message = generateWhatsAppMessage();
    if (message) {
      window.open(`${BUSINESS_INFO.whatsappUrl}?text=${message}`, '_blank');
    }
  }, [generateWhatsAppMessage]);

  const value = {
    cart,
    cartCount,
    cartTotal,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    openWhatsApp,
    menuItems: MENU_ITEMS,
    businessInfo: BUSINESS_INFO
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

export { MENU_ITEMS, BUSINESS_INFO };

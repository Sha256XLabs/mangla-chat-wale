import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import Cart from './components/Cart';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-charcoal bg-pattern">
        <Navbar />
        <Cart />
        <main>
          <Hero />
          <Menu />
          <About />
          <Reviews />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;

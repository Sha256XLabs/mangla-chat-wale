/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
      },
      colors: {
        saffron: '#FF9933',
        curry: '#E5A83B',
        spice: '#C41E3A',
        masala: '#8B4513',
        mint: '#228B22',
        cream: '#FFF8DC',
        charcoal: '#1a1a2e',
        deepRed: '#8B0000'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        display: ['Playfair Display', 'serif']
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'slide-up': 'slide-up 0.5s ease-out',
        'shake': 'shake 0.5s ease-in-out'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 153, 51, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 153, 51, 0.8)' }
        },
        'slide-up': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'shake': {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '75%': { transform: 'translateX(5px)' }
        }
      }
    },
  },
  plugins: [],
}

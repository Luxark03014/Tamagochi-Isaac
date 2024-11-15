/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Terminus': ['Terminus', 'monospace'],
      'PressStart2P': ['PressStart2P', 'monospace'],
    },
    extend: {
      backgroundImage:{
      'shop-bg': 'url(../../public/shop-background2.jpg)',
      'background': 'url(../../public/fondo-tboi.jpg)',
      'background-game' : 'url(../../public/fondo-isaac.png)',
      'background-menu' : 'url(../../public/menu.png)',
      'background-final' : 'url(../../public/fondo-bueno.png)',
    }
    },
  },
  plugins: [],
}


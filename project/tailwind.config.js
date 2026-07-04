/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f6f3ee',
          100: '#e9e2d6',
          200: '#cdbfa6',
          300: '#a89573',
          400: '#7c6a4a',
          500: '#5a4a32',
          600: '#3d3220',
          700: '#2a2218',
          800: '#1a1410',
          900: '#0f0b08',
        },
        brass: {
          50: '#fbf4e3',
          100: '#f3e2b8',
          200: '#e8cd84',
          300: '#dcb24f',
          400: '#d4a24c',
          500: '#b8842f',
          600: '#946623',
          700: '#6f4d1c',
          800: '#4a3314',
          900: '#2e200c',
        },
        ember: {
          400: '#e8703c',
          500: '#d4541e',
          600: '#b03f12',
        },
        cream: '#f6f1e7',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        heading: ['Oswald', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slow-zoom': 'slowZoom 20s ease-in-out infinite alternate',
        'marquee': 'marquee 40s linear infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.12)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

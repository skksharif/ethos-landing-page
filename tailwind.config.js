/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        saffron: {
          50: '#fffaf0',
          100: '#fef3c7',
          500: '#FF9933',
          600: '#ea580c',
          700: '#c2410c'
        },
        maroon: {
          50: '#fdf2f8',
          100: '#fce7f3',
          500: '#800020',
          600: '#701a1a',
          700: '#641610',
          800: '#4c1d1d',
          900: '#361818'
        },
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          500: '#FFD700',
          600: '#d97706',
          700: '#b45309'
        },
        terracotta: {
          50: '#fef7f2',
          100: '#feeee5',
          500: '#E07A5F',
          600: '#dc2626',
          700: '#b91c1c'
        },
        burgundy: {
          50: '#fdf2f8',
          100: '#fce7f3',
          500: '#722F37',
          600: '#881337',
          700: '#6b1e3a',
          800: '#5c1a2e',
          900: '#4a1625'
        }
      },
      fontFamily: {
        'serif': ['Georgia', 'Times New Roman', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(60px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      }
    },
  },
  plugins: [],
};
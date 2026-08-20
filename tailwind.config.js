/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          950: '#030712',
          900: '#080D1A',
          850: '#0E162B',
          800: '#14203D',
          750: '#1B2C52',
          700: '#253B6D',
          600: '#345294',
        },
        cyan: {
          glow: '#00F0FF',
          accent: '#06B6D4',
          subtle: '#38BDF8',
          neon: '#00FFE0'
        },
        sapphire: {
          600: '#2563EB',
          500: '#3B82F6',
          400: '#60A5FA',
        },
        violet: {
          500: '#8B5CF6',
          600: '#7C3AED',
          900: '#2E1065',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 35px -5px rgba(0, 240, 255, 0.45), 0 0 15px -2px rgba(6, 182, 212, 0.3)',
        'glow-blue': '0 0 35px -5px rgba(37, 99, 235, 0.45), 0 0 15px -2px rgba(59, 130, 246, 0.3)',
        'glow-violet': '0 0 35px -5px rgba(139, 92, 246, 0.4), 0 0 15px -2px rgba(124, 58, 237, 0.25)',
        'card-luxe': '0 20px 50px -15px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'pill-glow': '0 0 20px rgba(0, 240, 255, 0.25)',
      },
      animation: {
        'aurora': 'aurora 15s ease infinite alternate',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'float-slow': 'floatSlow 7s ease-in-out infinite',
        'float-delayed': 'floatSlow 7s ease-in-out 3.5s infinite',
        'shimmer': 'shimmer 3s infinite linear',
        'scanline': 'scanline 6s linear infinite',
        'border-beam': 'borderBeam 6s linear infinite',
      },
      keyframes: {
        aurora: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.04)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}

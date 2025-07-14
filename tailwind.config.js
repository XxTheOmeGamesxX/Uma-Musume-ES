export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        glow: 'glow 2s ease-in-out infinite',
        rainbow: 'rainbow 3s linear infinite' // ← animación para borde RGB
      },
      keyframes: {
        glow: {
          '0%, 100%': {
            boxShadow: '0 0 0px 2px #facc15, 0 0 0px 4px rgba(250, 204, 21, 0.3)'
          },
          '50%': {
            boxShadow: '0 0 4px 2px #facc15, 0 0 12px 6px rgba(250, 204, 21, 0.3)'
          }
        },
        rainbow: {
          '0%': { borderColor: '#f87171' },
          '25%': { borderColor: '#facc15' },
          '50%': { borderColor: '#34d399' },
          '75%': { borderColor: '#60a5fa' },
          '100%': { borderColor: '#f87171' }
        }
      }
    }
  },
  plugins: [],
}

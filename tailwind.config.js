/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        baloo: ['"Baloo 2"', 'cursive'],
        nunito: ['Nunito', 'sans-serif'],
      },
      colors: {
        junino: {
          azul:    '#0d1b3e',
          azulMed: '#1a2f6e',
          amarelo: '#f5c518',
          laranja: '#e8700a',
          vermelho:'#c0392b',
          verde:   '#27ae60',
          roxo:    '#8e44ad',
        },
      },
      animation: {
        'sway-left':  'swayLeft 4s ease-in-out infinite',
        'sway-right': 'swayRight 4s ease-in-out infinite',
        'float-up':   'floatUp 8s ease-in-out infinite',
        'twinkle':    'twinkle 2s ease-in-out infinite',
        'flame':      'flame 0.8s ease-in-out infinite alternate',
        'firework':   'firework 1.5s ease-out infinite',
      },
      keyframes: {
        swayLeft: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%':      { transform: 'rotate(3deg)' },
        },
        swayRight: {
          '0%, 100%': { transform: 'rotate(3deg)' },
          '50%':      { transform: 'rotate(-3deg)' },
        },
        floatUp: {
          '0%':   { transform: 'translateY(0) rotate(0deg)', opacity: '0.9' },
          '50%':  { transform: 'translateY(-30px) rotate(5deg)', opacity: '1' },
          '100%': { transform: 'translateY(0) rotate(0deg)', opacity: '0.9' },
        },
        twinkle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%':      { opacity: '0.3', transform: 'scale(0.7)' },
        },
        flame: {
          '0%':   { transform: 'scaleY(1) scaleX(1)', opacity: '0.9' },
          '100%': { transform: 'scaleY(1.1) scaleX(0.9)', opacity: '1' },
        },
        firework: {
          '0%':   { transform: 'scale(0)', opacity: '1' },
          '80%':  { transform: 'scale(1)', opacity: '0.8' },
          '100%': { transform: 'scale(1.1)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}

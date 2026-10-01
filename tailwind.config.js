module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { bg: '#0A1128', card: '#1C2541', accent: '#0066FF', teal: '#1B9AAA', soft: '#B8C5E6' },
      fontFamily: { sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'] },
      keyframes: {
        marquee: { to: { transform: 'translateX(-50%)' } },
        float: { '0%,100%': { transform: 'translateY(0) rotate(12deg)' }, '50%': { transform: 'translateY(-16px) rotate(24deg)' } },
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        float: 'float 5s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 1s infinite',
        'spin-slow': 'spin 40s linear infinite',
        'spin-rev': 'spin 55s linear infinite reverse',
      },
    },
  },
  plugins: [],
};

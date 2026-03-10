/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0f172a',
        slate: '#0b1220',
        glow: '#38bdf8',
        mint: '#22d3ee',
        sand: '#fbbf24',
      },
      boxShadow: {
        soft: '0 20px 60px -35px rgba(15, 23, 42, 0.6)',
        glow: '0 0 40px rgba(56, 189, 248, 0.25)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: 0.5 },
          '50%': { opacity: 0.9 },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseSlow: 'pulseSlow 8s ease-in-out infinite',
        shimmer: 'shimmer 12s linear infinite',
      },
    },
  },
  plugins: [],
}

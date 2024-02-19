import formsPlugin from '@tailwindcss/forms'
import headlessuiPlugin from '@headlessui/tailwindcss'
import { type Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '2rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3.5rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1.1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
  
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {

        'light-sand': '#f0e2cc',         
        'sand': '#e1c699',
        'dark-sand': '#9d8a6b',
        'darker-sand': '#433b2d', 
        'warm-gray': '#9d9087',  
        'olive': '#a8b07f',   
        'dusty-cedar': '#ac6b53', 
        'hero-colour': '#b6a9a0',
        'pale-sky': '#6e828a',   
        'whisper-white': '#f5f3ee', 
        'clay-brown': '#b5a27f',    
        'rose-taupe': '#a37f74',
        'ebony': '#A0522D',
        'green': '#006400',
        'light-green': '#00FF00',
      },
      fontFamily: {
        sans: 'var(--font-inter)',
        display: 'var(--font-lexend)',
      },
      maxWidth: {
        '2xl': '40rem',
      },
    },
  },
  plugins: [formsPlugin, headlessuiPlugin],
} satisfies Config

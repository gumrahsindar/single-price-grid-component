/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '26px'],
      lg: '18px',
      xl: '24px',
      '2xl': '32px',
    },
    extend: {
      fontFamily: {
        karla: ['Karla', 'sans-serif'],
      },
      colors: {
        'primary-cyan': 'hsl(179, 62%, 43%)',
        'primary-yellow': 'hsl(71, 73%, 54%)',
        'neutral-gray': 'hsl(204, 43%, 93%)',
        'neutral-blue': 'hsl(218, 22%, 67%)',
      },
    },
  },
  plugins: [],
}

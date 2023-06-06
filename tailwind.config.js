/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
       colors:{
        DarkViolet:'#3b3054',
        Cyan:'#2acfcf',
        Red:'#f46262',
        Gray:'#bfbfbf',
        GrayishViolet:'#9e9aa7',
        VeryDarkBlue:'#35323e',
        VeryDarkViolet:'#232127',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'shorten-pattern': "url('../public/images/bg-shorten-mobile.svg')",
        'boost-pattern': "url('../public/images/bg-boost-mobile.svg')",
      },
    },
  },
  plugins: [],
}

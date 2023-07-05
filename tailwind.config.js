/** @type {import('tailwindcss').Config} */
import withMT from '@material-tailwind/react/utils/withMT';

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      caprasimo: ['Caprasimo', 'cursive']
    },
    colors: {
      'dark-blue': '#213363',
      'dark-green': '#17594A',
      'primary-green': '#8EAC50',
      'primary-yellow': '#D3D04F',
      'secondary-orange': '#FF7B54'
    },
    extend: {},
  },
  plugins: [],
})
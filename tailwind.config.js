/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'translate-border': 'rgb(118,118,118)',
        'primary-text': 'rgb(41,41,41)',
        'lighter-text': 'rgb(126,126,126)',
        'side-nav-text': '#7e7e7e',
        'date-text': '#a9a9a9',
        'brighter-blue-hover': '#39c8d0',
        'brighter-blue': 'rgb(0,175,184)',
        'normal-blue-hover': '#4e91ff',
        'normal-blue': '#1654b9',
        'benefits-tag': 'rgb(243,243,243)',
        'primary-orange': '#ff7800',
        instagram: 'rgb(236, 6, 96)',
        facebook: 'rgb(59, 89, 152)',
      },
      spacing: {
        'header-height': '46px',
      },
      width: {
        132: '8.25rem',
      },
      maxWidth: {
        1224: '76.5rem',
        980: '61.25rem',
        90: '5.625rem',
      },
      boxShadow: {
        'hover-button-shadow': '0 0 4px #ff9100',
      },
    },
  },
  plugins: [],
};

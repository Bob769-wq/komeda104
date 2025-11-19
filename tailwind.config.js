/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'media-screen-1366': '1366px',
        'media-screen-1103': '1103px',
      },
      colors: {
        'dropdown-card-hover': 'rgba(255,214,178,.2)',
        'translate-border': 'rgb(118,118,118)',
        'primary-text': 'rgb(41,41,41)',
        'lighter-text': 'rgb(126,126,126)',
        'chatbot-icon-bg': '#b5b5b5',
        'search-bg': '#f3f3f3',
        'side-nav-text': '#7e7e7e',
        'date-text': '#a9a9a9',
        'brighter-blue-hover': '#39c8d0',
        'brighter-blue': 'rgb(0,175,184)',
        'normal-blue-hover': '#4e91ff',
        'normal-blue': '#1654b9',
        'benefits-tag': 'rgb(243,243,243)',
        'primary-orange': '#ff7800',
        'lighter-orange': '#ff9100',
        instagram: 'rgb(236, 6, 96)',
        facebook: 'rgb(59, 89, 152)',
      },
      spacing: {
        'header-height': '46px',
      },
      height: {
        'company-hero-pic': '304px',
        'company-hero-pic-mobile': '125px',
      },
      width: {
        132: '8.25rem',
        768: '48rem',
        153: '9.5625rem',
      },
      maxWidth: {
        1224: '76.5rem',
        980: '61.25rem',
        90: '5.625rem',
        984: '61.5rem',
      },
      boxShadow: {
        'hover-button-shadow': '0 0 4px #ff9100',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/customers/*.liquid',
    './templates/*.liquid'
  ],
  theme: {
    // Responsive breakpoint
    screens:{
      sm:'480px',
      md:'768px',
      lg:'1024px',
      xl:'1200px',
      xxl:'1440px',
    },
    extend: {},
  },
  plugins: [],
}


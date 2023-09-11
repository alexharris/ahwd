/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{njk,md}", "./src/**/*.svg",],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            fontSize: '20px',
            fontWeight: '400',
          },
        },
        DARK: {
          css: {
            color: 'white'
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{njk,md,html}", 
    "./src/**/*.svg",
    "./.eleventy.js",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            fontSize: '20px',
            fontWeight: '400',
            maxWidth: '1100px',
            color: '#1e3a8a',
            a: {
              color: '#1e3a8a',
            },
            h2: {
              color: '#1e3a8a',
            },
            h3: {
              color: '#1e3a8a',
            },
          },
        },
        dark: {
          css: {
            color: '#ffffff',
            a: {
              color: '#ffffff',
            },
            h2: {
              color: '#ffffff',
            },
            h3: {
              color: '#ffffff',
            },            
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


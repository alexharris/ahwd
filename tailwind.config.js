/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{njk,md,html}", 
    "./src/**/*.svg",
    "./src/**/*.js",
    "./.eleventy.js",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            fontSize: '20px',
            fontWeight: '400',
            // maxWidth: '900px',
            color: '#1E3A8A',
            h1: {
              color: '#1E3A8A',
            },
            h2: {
              color: '#1E3A8A',
            },
            h3: {
              color: '#1E3A8A',
            },
            h4: {
              color: '#1E3A8A',
            },
            strong: {
              color: '#1E3A8A',
            },
            blockquote: {
              color: '#1E3A8A',
            },
            'li::marker': {
              color: '#1E3A8A',
            },
            th: {
              color: '#1E3A8A',
            },
            code: { 
              color: '#1E3A8A',
            },
            a: {            
              color: '#1E3A8A',
              '&:hover': {
                textDecoration: 'underline',
              },
            },  
                 
          },
        },
        dark: {
          css: {
            color: '#ffffff',
            a: {
              color: '#ffffff',
            },
            h1: {
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


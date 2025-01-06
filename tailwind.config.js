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
            color: '#111827',
            h1: {
              color: '#111827',
            },
            h2: {
              color: '#111827',
            },
            h3: {
              color: '#111827',
            },
            h4: {
              color: '#111827',
            },
            strong: {
              color: '#111827',
            },
            blockquote: {
              color: '#111827',
            },
            'li::marker': {
              color: '#111827',
            },
            th: {
              color: '#111827',
            },
            code: { 
              color: '#111827',
            },
            a: {            
              color: '#111827',
              '&:hover': {
                textDecoration: 'underline',
              },
            },  
                 
          },
        },
        dark: {
          css: {
            fontSize: '20px',
            fontWeight: '400',
            // maxWidth: '900px',
            color: '#ffffff',
            h1: {
              color: '#ffffff',
            },
            h2: {
              color: '#ffffff',
            },
            h3: {
              color: '#ffffff',
            },
            h4: {
              color: '#ffffff',
            },
            strong: {
              color: '#ffffff',
            },
            blockquote: {
              color: '#ffffff',
            },
            'li::marker': {
              color: '#ffffff',
            },
            th: {
              color: '#ffffff',
            },
            code: { 
              color: '#ffffff',
            },
            a: {            
              color: '#ffffff',
              '&:hover': {
                textDecoration: 'underline',
              },
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


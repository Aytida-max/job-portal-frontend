// export default {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// } 
// postcss.config.js
export default {
  plugins: {
    '@tailwindcss/postcss': {}, // Use the new package
    autoprefixer: {},
    // Other PostCSS plugins if you use them
  },
};
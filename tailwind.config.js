const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      colors: {
        'warm-gray': colors.warmGray,
        teal: colors.teal,
        sky: colors.sky,
        cyan: colors.cyan,
        white: '#fffbf4',
        black: '#090909',
        beige: '#ebe6d8',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tw-elements/dist/plugin'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

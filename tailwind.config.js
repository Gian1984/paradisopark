const colors = require('tailwindcss/colors');

module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        'warm-gray': colors.warmGray,
        teal: colors.teal,
        sky: colors.sky,
        cyan: colors.cyan,
        white: '#fffbf4',
        beige: '#ebe6d8',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

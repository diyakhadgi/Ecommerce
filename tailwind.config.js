module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}", // Ensure that your paths are correct
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
});

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark_blue: "#02164F",
      },
      fontFamily: {
        "neue-montreal": ["Neue-Montreal", "sans-serif"],
      },
    },
  },
  plugins: [require("@material-tailwind/react/utils/withMT")],
});

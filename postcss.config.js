const purgecss = {
  "@fullhuman/postcss-purgecss": {
    // Specify the paths to all of the template files in your project
    content: [
      "./src/**/*.html",
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.css",
      "./pages/**/*.html",
      "./pages/**/*.js",
      "./pages/**/*.jsx",
      // etc.
    ],

    // Include any special characters you're using in this regular expression
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  },
};

//const tailwindcss = require("tailwindcss");

module.exports = {
  plugins: {
    "postcss-import": {},
    tailwindcss: {
      config: "./tailwind.js",
    },
    autoprefixer: {},
    //tailwindcss("./tailwind.js"),
    //...(process.env.NODE_ENV === "production" ? purgecss : {}),
    ...(process.env.NODE_ENV === "production" ? {} : {}),
  },
};

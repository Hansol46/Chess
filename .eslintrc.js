module.exports = {
  extends: ["airbnb-base"],
  env: {
    browser: true,
  },
  settings: {
    react: {
      version: "detected",
    },
  },
  ignorePatterns: [
    "node_modules",
    ".eslintrc.js",
    "webpack.config.js",
    "build",
  ],
};

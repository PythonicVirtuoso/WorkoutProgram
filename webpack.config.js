const path = require("path");

module.exports = {
  entry: "./5day-files/app.js",
  output: {
    path: path.resolve(__dirname, "dist/assets"),
    filename: "bundle.js",
  },
};

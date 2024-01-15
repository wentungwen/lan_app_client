const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // publicPath: process.env.NODE_ENV === "production" ? "/lan-app-client-020ac5fe9106/" : "/",
  devServer: {
    allowedHosts: "https://lan-app-client-020ac5fe9106.herokuapp.com/",
  },
});

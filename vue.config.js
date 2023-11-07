const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // Config global variable
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/scss/_variables.scss";`,
      },
    },
  },
  // Register vuex decorators
  transpileDependencies: ["vuex-module-decorators"],
});

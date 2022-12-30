const { defineConfig } = require('@vue/cli-service')
const path = require('path');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    output: {
      filename: "[name].js",
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),//absoulte path
      },
      extensions: [".js", ".vue", ".json"],
      plugins: [
        new DirectoryNamedWebpackPlugin(true)
      ]
    },
  }
})

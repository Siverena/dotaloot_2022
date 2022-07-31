const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: './build',
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/dotaloot_2022/',
  devServer: {
    // historyApiFallback: true,
    historyApiFallback: {
      rewrites: [{ from: /./, to: '/' }],
    },
  },
});

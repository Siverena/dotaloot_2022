const { defineConfig } = require('@vue/cli-service');
const publicPath =
  process.env.NODE_ENV === 'development' ? '/' : '/dotaloot_2022/';
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: './build',
  publicPath: publicPath,
  devServer: {
    historyApiFallback: {
      rewrites: [{ from: /./, to: publicPath }],
    },
  },
  // configureWebpack: {
  //   plugins: [new NodePolyfillPlugin()],
  //   resolve: {
  //     fallback: {
  //       fs: false,
  //       path: false,
  //       os: false,
  //       net: false,
  //     },
  //   },
  // },
});

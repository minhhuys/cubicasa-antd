// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  mode: "development",
  rules: [
    {
      test: /\.vue$/,
      loader: "vue-loader",
      options: {
        hotReload: true, // disables Hot Reload
      },
    },
  ],
  resolve: {
    alias: {
      "@ant-design/icons/lib/dist$": path.resolve(
        __dirname,
        "./src/assets/ant-design-icons.js"
      ),
    },
  },
  //   plugins: [
  //     new BundleAnalyzerPlugin(),
  //   ]
};

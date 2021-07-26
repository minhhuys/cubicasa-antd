module.exports = {
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },
  // chainWebpack: (config) => {
  //   const svgRule = config.module.rule("svg");

  //   svgRule.uses.clear();

  //   svgRule
  //     .use("babel-loader")
  //     .loader("babel-loader")
  //     .end()
  //     .use("vue-svg-loader")
  //     .loader("vue-svg-loader")
  //     .options({
  //       svgo: {
  //         plugins: [{ removeDimensions: true }, { removeViewBox: false }],
  //       },
  //     });
  // },
};

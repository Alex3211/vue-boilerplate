module.exports = {
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .oneOf('file-css')
      .resourceQuery(/file-css/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'assets/[name].[hash:8].[ext]'
      })
      .end()
      .end()
      .oneOf('external')
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  }
}

const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  css: { extract: false },
  transpileDependencies: true,
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html'
    }
  },
  chainWebpack: (config) => {
    config.module
      .rule('js')
      .include
      .add('/packages')
      .end()
      .use('babel')
      .loader('babel-loader')
    // config.set('externals', {
    //   lodash: '_',
    // })
  }
})

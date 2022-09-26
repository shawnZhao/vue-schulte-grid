module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    ['@babel/preset-env', {
      modules: false,
      useBuiltIns: 'usage',
      debug: true
    }]
  ],
  plugins: [
    'external-helpers'
  ]
}

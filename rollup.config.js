import vue from 'rollup-plugin-vue'
import resolve from '@rollup/plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'packages/index.js',
  external: ['lodash'],
  output: {
    file: 'lib/schulte.umd.js',
    format: 'umd',
    name: 'schulte-grid',
    globals: {
      vue: 'Vue' // 告诉rollup全局变量Vue即是vue
    }
  },
  plugins: [
    vue(),
    postcss({
      extensions: ['.css'],
      extract: false
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    terser()
  ]
}

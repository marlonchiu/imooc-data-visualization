const path = require('path')
const resolve = require('rollup-plugin-node-resolve')
// const commonjs = require('rollup-plugin-commonjs')
const commonjs = require('@rollup/plugin-commonjs')
const babel = require('rollup-plugin-babel')
const json = require('rollup-plugin-json')
const vue = require('rollup-plugin-vue')
const postcss = require('rollup-plugin-postcss')

const inputPath = path.resolve(__dirname, './src/index.js')
const outputUmdPath = path.resolve(__dirname, './dist/imooc.datav.umd.js')
const outputEsPath = path.resolve(__dirname, './dist/imooc.datav.es.js')

module.exports = {
  input: inputPath,
  output: [
    {
      file: outputUmdPath,
      format: 'umd',
      name: 'imoocDatav',
      globals: {
        vue: 'Vue'
      }
    },
    {
      file: outputEsPath,
      format: 'es',
      globals: {
        vue: 'Vue'
      }
    }
  ],
  // TODO https://blog.csdn.net/kalrase/article/details/110186870
  // TODO 插件引入顺序的问题
  plugins: [
    // 将第三方模块进行混合打包
    vue(),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
      plugins: [
        [
          "@babel/plugin-transform-runtime",
          {
            regenerator: true
          }
        ]
      ]
    }),
    resolve({
      preferBuiltins: true
    }),
    commonjs(),
    json(),
    postcss({
      plugins: []
    })
  ],
  external: [
    // 作为外部模块，不会被打包到主文件中
    'vue'
  ]
}

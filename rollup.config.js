import pkg from './package.json'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'

const makeExternalPredicate = (externalArr) => {
  if (externalArr.length === 0) {
    return () => false
  }
  const pattern = new RegExp(`^(${externalArr.join('|')})($|/)`)
  return (id) => pattern.test(id)
}

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    },
    {
      file: pkg.unpkg,
      format: 'umd',
      name: 'WebStoragePluginTaro',
      globals: {
        '@tarojs/taro': 'Taro',
      },
    },
  ],
  external: makeExternalPredicate([
    ...Object.keys(pkg.peerDependencies || {}),
    ...Object.keys(pkg.dependencies || {}),
  ]),
  plugins: [
    json(),
    resolve(),
    typescript({ useTsconfigDeclarationDir: true }),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'runtime',
    }),
    commonjs({
      include: 'node_modules/**'
    }),
  ],
}

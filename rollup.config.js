import { dependencies, peerDependencies } from './package.json'
import typescript from 'rollup-plugin-typescript2'

export default [
  {
    external: [...Object.keys(dependencies || {}), ...Object.keys(peerDependencies || {})],
    input : { index: 'src/index.ts' },
    output: [
      {
        dir: 'dist',
        format: 'esm',
      },
      {
        dir: 'dist/cjs',
        format: 'cjs',
      },
    ],
    plugins: [
      typescript({
        typescript: require('typescript'),
        useTsconfigDeclarationDir: true,
      }),
    ],
    preserveModules: true,
  }
]

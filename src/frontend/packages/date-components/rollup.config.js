import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import css from 'rollup-plugin-import-css';
import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import { terser } from 'rollup-plugin-terser';
import json from 'rollup-plugin-json';
import { createFilter } from 'rollup-pluginutils';

const external = createFilter(
  [
    'react',
    'react-dom',
    'react-admin',
    'react-router-dom',
    '@material-ui/**'
  ],
  null,
  { resolve: false }
);

export default {
  input: './src/index.js',
  output: [
    { format: 'cjs', file: './dist/index.cjs.js', sourcemap: false },
    { format: 'es', file: './dist/index.es.js', sourcemap: false }
  ],
  external,
  plugins: [
    json(),
    replace({
      // Make sure React code is compiled in production mode
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    // Resolve but don't compile the node_modules directory
    nodeResolve(),
    commonjs(),
    // CSS is not used but the compilation breaks if this plugin is not used
    css(),
    // Minify the result
    terser()
  ]
};

import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import nodeGlobals from 'rollup-plugin-node-globals';
import ignore from 'rollup-plugin-ignore';

const input = './src/components/index.js';
const name = 'laboratoria-ui';
const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
};
const babelOptions = {
    exclude: './node_modules/**'
};
const commonjsOptions = {
  ignoreGlobal: true,
  exclude: './node_modules/',
};

export default [
  {
    input,
    output: { file: `build/umd/${name}.production.min.js`, format: 'umd', name, globals },
    external: Object.keys(globals),
    plugins: [
      nodeResolve(),
      babel(babelOptions),
      commonjs(commonjsOptions),
      nodeGlobals(),
    ],
  },

];

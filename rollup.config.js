import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import nodeGlobals from 'rollup-plugin-node-globals';
import jsx from 'rollup-plugin-jsx';

const input = './src/components/index.jsx';

const name = 'laboratoria-ui';
const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  '@material-ui/core/styles': '@material-ui/core/styles',
  '@material-ui/core': '@material-ui/core',
};
const babelOptions = {
  exclude: './node_modules/**',
};
const commonjsOptions = {
  ignoreGlobal: true,
  exclude: './node_modules',

};

export default [
  {
    input,
    output: {
      file: `dist/umd/${name}.production.min.js`,
      format: 'umd',
      name,
      globals,
    },
    external: Object.keys(globals),
    plugins: [
      nodeResolve({
        extensions: ['.js', '.jsx'],
      }),
      babel(babelOptions),
      commonjs(commonjsOptions),
      nodeGlobals(),
      jsx({ factory: 'React.createElement' }),
    ],
  },

];

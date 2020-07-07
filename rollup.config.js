import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import svg from 'rollup-plugin-svg';
import { terser } from 'rollup-plugin-terser';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import pkg from './package.json';

// treat as externals not relative, not absolute and not reserved rollup paths
const external = id => !id.startsWith('\0') && !id.startsWith('.') && !id.startsWith('/');

const input = './src/components/index.jsx';
const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'prop-types': 'PropTypes',
};

const getBabelOptions = ({ useESModules }) => ({
  exclude: 'node_modules/**',
  runtimeHelpers: true,
  plugins: [
    ['@babel/transform-runtime', { useESModules }],
  ],
});

const commonjsOptions = {
  include: 'node_modules/**',
  namedExports: {
    'node_modules/react-is/index.js': ['isFragment', 'ForwardRef', 'Memo'],
  },
};

export default [
  {
    input,
    external,
    output: { file: pkg.main, format: 'cjs', sourcemap: true },
    plugins: [
      resolve({ extensions: ['.js', '.jsx'] }),
      babel(getBabelOptions({ useESModules: false })),
      svg(),
      sizeSnapshot(),
    ],
  },

  {
    input,
    external,
    output: { file: pkg.module, format: 'esm', sourcemap: true },
    plugins: [
      resolve({ extensions: ['.js', '.jsx'] }),
      babel(getBabelOptions({ useESModules: true })),
      svg(),
      commonjs(commonjsOptions),
      sizeSnapshot(),
    ],
  },

  {
    input,
    external: Object.keys(globals),
    output: {
      globals,
      format: 'umd',
      name: pkg.name,
      file: 'dist/laboratoria-ui.umd.js',
    },

    plugins: [
      resolve({ extensions: ['.js', '.jsx'] }),
      babel(getBabelOptions({ useESModules: true })),
      svg(),
      commonjs(commonjsOptions),
      sizeSnapshot(),
    ],
  },

  {
    input,
    external: Object.keys(globals),
    output: {
      globals,
      format: 'umd',
      name: pkg.name,
      file: 'dist/laboratoria-ui.umd.min.js',
    },
    plugins: [
      resolve({ extensions: ['.js', '.jsx'] }),
      babel(getBabelOptions({ useESModules: true })),
      svg(),
      commonjs(commonjsOptions),
      terser(),
    ],
  },
];

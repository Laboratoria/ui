import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

export default {
    input: './src/index.js',
    moduleName: 'LaboratoriaUI',
    sourcemap: true,
    targets: [
        {
            dest: './dist/laboratoria-ui.js',
            format: 'umd'
        },
        {
            dest: './dist/laboratoria-ui.module.js',
            format: 'es'
        }
    ],
    plugins: [
        babel({
            exclude: './node_modules/**'
        }),
        resolve(),
        commonjs({
            namedExports: {
            // left-hand side can be an absolute path, a path
            // relative to the current directory, or the name
            // of a module in node_modules
            'node_modules/@material-ui/core/styles/createMuiTheme.js': [ 'createMuiTheme' ]
            }
        })
    ],
    external: ['react', 'react-dom'],
    globals: {
        react: 'React',
        'react-dom': 'ReactDOM'
    }
};
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
        },
        {
            dest: './dist/laboratoria-ui.commonjs.js',
            format: 'cjs'
        },
    ],
    plugins: [
        babel({
            exclude: './node_modules/**'
        }),
        resolve(),
        commonjs()
    ],
    external: ['react', 'react-dom'],
    globals: {
        react: 'React',
        'react-dom': 'ReactDOM'
    }
};
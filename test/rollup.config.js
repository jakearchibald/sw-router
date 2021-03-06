import resolve from 'rollup-plugin-node-resolve';
import commonJs from 'rollup-plugin-commonjs';

export default {
  entry: 'src.js',
  format: 'iife',
  plugins: [
    commonJs(),
    resolve(),
  ],
  dest: 'build.js'
};

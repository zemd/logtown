'use strict';

const babel = require('rollup-plugin-babel');

export default {
  input: './index.js',
  output: {
    file: './es5/index.js',
    format: 'cjs',
    interop: false
  },
  external: [
    'debug'
  ],
  plugins: [
    babel({
      presets: [
        ['@babel/preset-env', {
          'targets': {
            'browsers': ['last 2 versions', 'safari >= 7']
          },
          'modules': false
        }]
      ]
    })
  ]
};

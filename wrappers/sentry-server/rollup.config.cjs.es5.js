'use strict';

import babel from 'rollup-plugin-babel';

export default {
  input: './index.js',
  output: {
    file: './es5/index.js',
    format: 'cjs',
    interop: false
  },
  external: [
    'raven'
  ],
  plugins: [
    babel({
      presets: [
        ['@babel/preset-env', {
          'targets': {
            'node': '5'
          },
          'modules': false
        }]
      ]
    })
  ]
};

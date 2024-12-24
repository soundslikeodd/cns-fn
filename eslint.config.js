import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    ignores: ['commonjs/'],
  },
  {
    rules: {
      indent: [
        'error',
        2
      ],
      'linebreak-style': [
        'error',
        'unix'
      ],
      quotes: [
        'error',
        'single'
      ],
      semi: [
        'error',
        'always'
      ]
    }
  },
];

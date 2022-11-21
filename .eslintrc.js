/* Copyright 2021, Milkdown by Mirone. */

module.exports = {
  extends: [
    '@antfu',
  ],
  plugins: ['header'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: [
    'lib',
    'snapshots.js',
    'docs',
  ],
  rules: {
    'yml/no-empty-mapping-value': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
  },
  overrides: [
    {
      files: ['**/react/**/*.tsx', '**/react/**/*.ts'],
      extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
      ],
      rules: {
        'jsx-quotes': [
          'error',
          'prefer-double',
        ],
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
      },
    },
    {
      files: ['**/table/**/*.ts'],
      rules: {
        eqeqeq: 'off',
      },
    },
    {
      files: ['**/*.ts', '**/*.tsx', '**/*.js'],
      rules: {
        'header/header': ['error', 'block', ' Copyright 2021, Milkdown by Mirone. '],
      },
    },
  ],
}

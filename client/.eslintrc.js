module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extension: ['.js', '.jsx', '.json'],
        paths: ['./src'],
      },
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'no-unused-vars': 'warn',
    'no-console': 'off',
    'func-names': 'off',
    'no-process-exit': 'off',
    'object-shorthand': 'off',
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 0,
    'react/jsx-props-no-spreading': 0,
    'no-underscore-dangle': 0,
    'import/no-named-as-default': 0,
    'arrow-body-style': 0,
    camelcase: 0,
  },
};

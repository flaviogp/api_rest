module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'class-methods-use-this': 'off',
    'no-unused-expressions': 'off',
    'import/first': 'off',
    'no-param-reassign': 'off',
    'object-curly-newline': 'off',
    'quote-props': 'off',
    'camelcase': 'off',
  },
};

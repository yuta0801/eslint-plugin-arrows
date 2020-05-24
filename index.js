module.exports = {
  configs: {
    recommended: {
      env: {
        builtin: false,
      },
      globals: {
        log: 'readonly',
        load: 'readonly',
      },
      parserOptions: {
        ecmaVersion: 2020,
      },
      plugins: ['arrows'],
      rules: {
        semi: ['error', 'never'],
        'no-undef': ['error'],
        'arrows/one-arrow': 'error',
        'arrows/no-assignment': 'error',
        indent: ['warn', 2],
      },
    },
  },
  rules: {
    'one-arrow': require('./rules/one-arrow'),
    'no-assignment': require('./rules/no-assignment'),
  },
}

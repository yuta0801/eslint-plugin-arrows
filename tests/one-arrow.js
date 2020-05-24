const RuleTester = require('eslint').RuleTester
const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 6 } })

const rule = require('../rules/one-arrow')

const valid = [
  '(() => 1)',
  '(() => 1) // comment',
]

const errors = [{ messageId: 'invalid' }]

const invalid = [
  { code: '1', errors },
  { code: '(() => 1); 1', errors },
  { code: '1; (() => 1)', errors },
  { code: '(() => 1); (() => 1)', errors },
]

ruleTester.run('one-arrow', rule, { valid, invalid })

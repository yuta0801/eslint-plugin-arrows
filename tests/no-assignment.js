const RuleTester = require('eslint').RuleTester
const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 6 } })

const rule = require('../rules/no-assignment')

const valid = [
  '((foo = 1) => foo)'
]

const errors = [{ messageId: 'invalid' }]

const invalid = [
  { code: 'foo = 1', errors },
]

ruleTester.run('no-assignment', rule, { valid, invalid })

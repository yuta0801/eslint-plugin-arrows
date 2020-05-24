module.exports = {
  meta: {
    messages: {
      invalid: 'The program can contain only one arrow function'
    }
  },

  create(context) {
    const isArrowFunction = node =>
      node.type === 'ArrowFunctionExpression'
    const isIIFE = node =>
      node.type === 'CallExpression' &&
      node.callee && isArrowFunction(node.callee)
    const isValid = node =>
      node.type === 'ExpressionStatement' &&
      isArrowFunction(node.expression) || isIIFE(node.expression)

    const checkProgram = program => {
      const report = node => context.report({ node, messageId: 'invalid' })

      let found = false
      for (const node of program.body) {
        if (!found && isValid(node)) found = true
        else report(node)
      }
    }

    return {
      Program: checkProgram,
    }
  },
}

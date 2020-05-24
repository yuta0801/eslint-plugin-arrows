module.exports = {
  meta: {
    messages: {
      invalid: 'The program cannot use assignment'
    }
  },

  create(context) {
    return {
      AssignmentExpression: node => {
        context.report({ node, messageId: 'invalid' })
      },
    }
  },
}

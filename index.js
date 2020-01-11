"use strict";

module.exports = {
  rules: {
    "no-useless-const": {
      meta: {
        type: "problem",
        fixable: true,

        docs: {
          description: "disallow useless const",
          category: "ECMAScript 6",
          recommended: true,
          suggestion: true
        },

        messages: {
          useless: "const is useless. Use let instead",
        }
      },

      create(context) {
        return {
          "VariableDeclaration[kind=const]"(node) {
            context.report({
              node,
              messageId: "useless",

              fix(fixer) {
                return fixer.replaceTextRange(
                  [node.range[0], node.range[0] + 5],
                  "let"
                );
              }
            });
          }
        };
      }
    }
  }
};

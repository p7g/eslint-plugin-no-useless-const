const { RuleTester } = require("eslint");
const plugin = require("./index");

const ruleTester = new RuleTester({
  parserOptions: { ecmaVersion: "2015" }
});

ruleTester.run("no-useless-const", plugin.rules["no-useless-const"], {
  valid: [
    {
      code: "let abc = 123;"
    }
  ],

  invalid: [
    {
      code: "const abc = 123;",
      output: "let abc = 123;",
      errors: [{ messageId: "useless" }]
    }
  ]
});

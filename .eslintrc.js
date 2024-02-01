module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es2021": true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
  ],
  "overrides": [
    {
      "env": {
        "node": true,
      },
      "files": [
        ".eslintrc.{js,cjs}",
      ],
      "parserOptions": {
        "sourceType": "script",
      },
    },
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
  },
  "plugins": [
    "@typescript-eslint",
    "react",
  ],
  "rules": {
    "no-console": "warn",
    "quotes": ["warn", "double"], 
    "jsx-quotes": ["warn", "prefer-double"],
    "prefer-const": "warn",
    "indent": ["warn", 2],
    "max-len": ["warn", { code: 120 }],
    "comma-dangle": ["warn", "always-multiline"],
    "semi": ["warn", "always"],
  },
};

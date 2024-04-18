const simpleImportSortRules = [
  "warn",
  {
    groups: [
      // external
      ["^/?"],
      // internal fsd folders
      ["^@app", "^@pages", "^@widgets", "^@entities", "^@shared"],
      // internal files
      ["^\\.\\.?"],
      // styles
      ["^\\./styles.module."],
    ],
  },
];

const namingConventionRules = [
  "warn",
  {
    selector: "variable",
    format: ["camelCase", "PascalCase", "UPPER_CASE"],
  },
  {
    selector: "variable",
    format: null,
    filter: {
      match: true,
      regex: "^[ufo_|__]",
    },
  },
];

const explicitFunctionReturnTypeRules = [
  "error",
  {
    allowExpressions: false,
    allowTypedFunctionExpressions: true,
    allowHigherOrderFunctions: true,
    allowDirectConstAssertionInArrowFunctions: true,
    allowConciseArrowFunctionExpressionsStartingWithVoid: false,
  },
];

module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "airbnb-typescript",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
  ],
  plugins: [
    "import",
    "@typescript-eslint",
    "prettier",
    "react-hooks",
    "simple-import-sort",
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    project: "./tsconfig.json",
  },
  rules: {
    // class rules
    "no-plusplus": "off",
    // class rules
    "no-new": "off",
    "react/display-name": "off",
    "simple-import-sort/exports": "warn",
    "import/order": "off",
    "linebreak-style": "off",
    "import/prefer-default-export": "off",
    "react/prop-types": "off",
    "no-underscore-dangle": "warn",
    "react/jsx-props-no-spreading": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/require-default-props": "off",
    "spaced-comment": "off",
    "@typescript-eslint/object-curly-spacing": "off",
    "simple-import-sort/imports": simpleImportSortRules,
    "@typescript-eslint/naming-convention": namingConventionRules,
    "@typescript-eslint/explicit-function-return-type":
      explicitFunctionReturnTypeRules,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  ignorePatterns: [
    "**/graphql/types.ts",
    "node_modules",
    ".eslintrc.js",
    "webpack.config.js",
    "declaration.d.ts",
    "jest.config.js",
    "setupTests.js",
    "scripts",
    "dist",
  ],
};

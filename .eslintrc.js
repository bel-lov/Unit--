// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//   },
//   extends: [
//     'plugin:react/recommended',
//     'airbnb',
//   ],
//   parserOptions: {
//     ecmaFeatures: {
//       jsx: true,
//     },
//     ecmaVersion: 'latest',
//     sourceType: 'module',
//   },
//   plugins: [
//     'react',
//   ],
//   rules: {
//   },
// };

module.exports = {
  "extends": "airbnb-base",
  "env": {
    "es6": true,
    "browser": true,
    "jest": true
  },
  "rules": {
    "no-restricted-syntax": [
      "error",
      "LabeledStatement",
      "WithStatement"
    ]
  }
}
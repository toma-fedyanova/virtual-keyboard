/* eslint-disable */
module.exports = {
  "env": {
    "browser": true,
"es2021": true
    },
    "extends": "eslint:recommended",
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "max-len": ["error", { "code": 160 }],
        "import/extensions": "off",
        "linebreak-style": "off",
        "no-console": "off",
        "dot-notation": "off",
        "prefer-arrow-callback": "off",
        "nno-use-before-define": "off",
        "prefer-const": "off",
        "no-restricted-syntax": "off",
        "no-use-before-define": "off",
        "no-extra-semi": "off"
    },
    "extends" : "airbnb-base",
}

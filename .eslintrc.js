module.exports =  {
    parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
    env: {
      browser: true,
      es6: true
    },
    extends:  [    
      'plugin:react/recommended',  // Uses the recommended rules from @eslint-plugin-react
      "airbnb",
      "airbnb/hooks",
      'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from @typescript-eslint/eslint-plugin
      'plugin:functional/recommended'
    ],
    plugins: ["functional"],
    parserOptions:  {
        ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
        sourceType:  'module',  // Allows for the use of imports
        ecmaFeatures:  { 
          jsx:  true,  // Allows for the parsing of JSX
        },
    },
    rules:  {
      "functional/functional-parameters": 0,
      "functional/prefer-readonly-type": 0,
      "functional/no-mixed-type": 0,
      "functional/no-expression-statement": 1,
      "functional/no-return-void": 1,
      "implicit-arrow-linebreak": 0,
      "import/prefer-default-export": 0,
      "react/jsx-filename-extension": 0,
      "linebreak-style": 0,
      "max-len": [
        "error",
        80,
        {
          ignoreComments: true,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreRegExpLiterals: true
        }
      ],
      // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
      // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    },
    settings:  {
      react:  {
        version:  'detect',  // Tells eslint-plugin-react to automatically detect the version of React to use
      },
      "import/resolver": {
        "node": {
          "extensions": [".js", ".jsx", ".ts", ".tsx"]
        }
      }
  
    },
  };
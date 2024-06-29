## Basic Installation

- npx @react-native-community/cli@latest init SocialMediaApp
- cd "/Users/vaishali/Desktop/Vaishali/react_native/SocialMediaApp"
- npx react-native run-ios
- simulator change
  - npx react-native run-ios --simulator="iPhone 14 //didn't work for me

## Eslint Errors

**_Even these settings are not required now, as I have done some global settings given below, but just in case:_**

- in react native project, eslint is giving issues
- .eslintrc.js
    <pre>
        module.exports = {
            root: true,
            extends: [
                'standard-with-typescript',
                'plugin:react/recommended',
                'prettier',
                'prettier/react',
            ],
            plugins: ['prettier'],
            rules: {
                // "prettier/prettier": "error",
                '@typescript-eslint/indent': ['error', 2],
                '@typescript-eslint/no-unused-vars': 'error',
                '@typescript-eslint/no-explicit-any': 'error',
            },
        };
    </pre>
- .eslintignore
    <pre>
        .eslintrc.js
        ios/
        android/
        *.config.js
        .eslintrc.js
        node_modules
        package-lock.json
  
        node_modules/
        build/*.js
        config/*.js
        coverage/*.js
        coverage/*
        jest/*.js
        __tests__/*
        __tests__/*.js
    </pre>

- .prettierrc.js
    <pre>
        module.exports = {
            arrowParens: 'avoid',
            bracketSameLine: true,
            bracketSpacing: false,
            singleQuote: true,
            trailingComma: 'all',
        };
  
    </pre>

- In settings.json of vscode (global settings)
    <pre>
            "eslint.codeActionsOnSave.rules": { "source.fixAll.eslint": true },
            "eslint.run": "onSave",
            "eslint.validate": [
                "javascript",
                "javascriptreact",
                "typescript",
                "typescriptreact"
            ],
            "prettier.useTabs": true
    </pre>

## Custom Fonts Install

- Downloaded fonts and installed in my system.
- added fonts to assets/fonts folder.
- Created a file called react-native.config.js and add this
    <pre>
        module.exports = {
            project: {
                android: {},
                ios: {},
            },
            assets: ["./assets/fonts"]
        }
    </pre>
- npx react-native-asset
- created a helper function getFontFamily

## Props

- Installed a library called prop-types to check props types using
  - npm install prop-types --save
- After that
  - cd ios && pod install && cd ..
  - npx react-native run-ios

## FontAwesome Icons (https://docs.fontawesome.com/web/use-with/react-native)

- npm i --save @fortawesome/react-native-fontawesome @fortawesome/fontawesome-svg-core react-native-svg
- cd ios && pod install && cd ..
- npm i --save @fortawesome/free-solid-svg-icons
  npm i --save @fortawesome/free-brands-svg-icons
  npm i --save @fortawesome/free-regular-svg-icons
- npx react-native run-ios

## Created all the components

## React Navigations

- npm install @react-navigation/native
- npm install react-native-screens react-native-safe-area-context
- npx pod-install ios
- Updated MainActivity.kt(android/app/src/main/java/) file as given in React Navigations docs (https://reactnavigation.org/docs/getting-started/)
- npm install @react-navigation/stack (https://reactnavigation.org/docs/stack-navigator)
- npm install react-native-gesture-handler
- npm install @react-native-masked-view/masked-view
- npx pod-install ios
- npx react-native run-ios

# React Drawer Navigator

- npm install @react-navigation/drawer
- npm install react-native-gesture-handler react-native-reanimated
- npx pod-install ios
- Add this in babel.config.js (told by tutor - by her experience)
  plugins: ['react-native-reanimated/plugin'],

# Tab Navigation

- npm install @react-navigation/material-top-tabs react-native-tab-view
- npm install react-native-pager-view
- npx pod-install ios
- use this to create navigator and screens---> createMaterialTopTabNavigator();

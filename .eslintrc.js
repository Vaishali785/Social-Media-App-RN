module.exports = {
    root: true,
    extends: [
        '@react-native',
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
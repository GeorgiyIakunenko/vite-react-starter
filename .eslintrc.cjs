module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    settings: {
        react: { version: 'detect' },
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:react/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh','@typescript-eslint', 'simple-import-sort', 'react'],
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        'react/react-in-jsx-scope': 'off', // React 17 no longer requires importing React
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
    },
    "overrides": [
        {
            "files": ["**/*.js", "**/*.ts", "**/*.tsx"],
            "rules": {
                "simple-import-sort/imports": [
                    "error",
                    {
                        "groups": [
                            // `react` first, `next` second, then packages starting with a character
                            ["^react$", "^next", "^[a-z]"],
                            // Packages starting with `@`
                            ["^@"],
                            // Packages starting with `~`
                            ["^~"],
                            // Imports starting with `../`
                            ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
                            // Imports starting with `./`
                            ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
                            // Style imports
                            ["^.+\\.s?css$"],
                            // Side effect imports
                            ["^\\u0000"]
                        ]
                    }
                ]
            }
        }
    ],
}
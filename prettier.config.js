module.exports = {
    printWidth: 120,
    trailingComma: 'all',
    tabWidth: 4,
    semi: true,
    singleQuote: true,
    bracketSpacing: true,
    arrowParens: 'avoid',
    quoteProps: 'as-needed',
    vueIndentScriptAndStyle: true,
    overrides: [
        {
            files: '*.js',
            options: {
                parser: 'babel',
            },
        },
        {
            files: '*.json',
            options: {
                parser: 'json',
            },
        },
        {
            files: '.prettierrc',
            options: {
                parser: 'json',
            },
        },
    ],
};

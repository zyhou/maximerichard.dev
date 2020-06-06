const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: ['./src/**/*.js'],
    theme: {
        extend: {
            fontFamily: {
                serif: ['Noe Display', ...defaultTheme.fontFamily.serif],
                mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
            },
        },
    },
};

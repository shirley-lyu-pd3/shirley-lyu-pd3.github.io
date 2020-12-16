module.exports = {
    purge: {
        mode: "all",
        content: ["./src/**/*.svelte", "./src/**/*.html"],
        options: {
            defaultExtractor: (content) => [
                ...tailwindExtractor(content),
                // Match Svelte class: directives (https://github.com/tailwindlabs/tailwindcss/discussions/1731)
                ...[...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(
                    ([_match, group, ..._rest]) => group
                ),
            ],
            keyframes: true,
        },
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        colors: {
            green: '#26A69A'
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}

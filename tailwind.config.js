const production = !process.env.ROLLUP_WATCH;
module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true
    },
    purge: {
        content: [
            "./src/**/*.svelte",
        ],
        defaultExtractor: content => {
            // Capture as liberally as possible, including things like `h-(screen-1.5)`
            const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
            const broadMatchesWithoutTrailingSlash = broadMatches.map(match => _.trimEnd(match, '\\'))
            // Capture classes within other delimiters like .block(class="w-1/2") in Pug
            const innerMatches = content.match(/[^<>"'`\s.(){}[\]#=%]*[^<>"'`\s.(){}[\]#=%:]/g) || []
            const matches = broadMatches.concat(broadMatchesWithoutTrailingSlash).concat(innerMatches)
            // if (_.get(config, 'purge.preserveHtmlElements', true)) {
            //   return [...htmlTags].concat(matches)
            // } else {
            // }
            return [...matches, ...svelteExtractor(content)]
        },
        enabled: production // disable purge in dev
    },
    theme: {
        colors: {
            green: '#26A69A'
        }

    }
};

// https://github.com/tailwindlabs/tailwindcss/discussions/1731
function svelteExtractor(content) {
    const regExp = new RegExp(/[A-Za-z0-9-_:/]+/g)
    const matchedTokens = []
    let match = regExp.exec(content)

    while (match) {
        if (match[0].startsWith('class:')) {
            matchedTokens.push(match[0].substring(6))
        } else {
            matchedTokens.push(match[0])
        }
        match = regExp.exec(content)
    }
    return matchedTokens
}

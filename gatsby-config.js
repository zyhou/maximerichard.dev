const config = require('./config');

module.exports = {
    siteMetadata: {
        title: config.title,
        siteUrl: config.siteUrl,
        logo: config.logoStatic,
        description: config.description,
        keywords: config.keywords,
        lang: config.lang,
        author: config.author,
        twitter: config.twitter,
        twitterHandle: config.twitterHandle,
        github: config.github,
        linkedin: config.linkedin,
        twitch: config.twitch,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-postcss`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: config.title,
                short_name: config.titleShort,
                description: config.description,
                start_url: config.pathPrefix,
                lang: config.lang,
                homepage_url: config.siteUrl,
                background_color: config.backgroundColor,
                theme_color: config.themeColor,
                display: config.display,
                icon: config.logo,
            },
        },
        `gatsby-plugin-offline`,
        `gatsby-plugin-robots-txt`,
    ],
};

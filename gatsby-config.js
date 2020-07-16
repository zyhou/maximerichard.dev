const config = require('./config');

const {
    NODE_ENV,
    URL: NETLIFY_SITE_URL = config.siteUrl,
    DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
    CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
    siteMetadata: {
        siteUrl,
        title: config.title,
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
        `gatsby-plugin-catch-links`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages/`,
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                defaultLayouts: {
                    default: require.resolve('./src/components/default-page-layout.js'),
                },
                gatsbyRemarkPlugins: [
                    { resolve: `gatsby-remark-copy-linked-files` },
                    {
                        resolve: `gatsby-remark-autolink-headers`,
                        options: {
                            icon:
                                '<svg fill="currentcolor" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g><path stroke="null" d="M22.93 8.784v-3.07h-4.073l.94-4.3L16.664.8l-1.097 4.913h-4.699l1.097-4.299L8.832.8 7.735 5.713H2.566v3.07H7.11l-1.41 6.142H1v3.071h4.073l-.94 4.3 3.133.613 1.096-4.913h4.7l-1.097 4.3 3.133.613 1.096-4.913h5.17v-3.07H16.82l1.41-6.142h4.698zm-9.399 6.141H8.832l1.566-6.141h4.7l-1.567 6.141z"/></g></svg>',
                            enableCustomId: true,
                            isIconAfterHeader: true,
                        },
                    },
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            backgroundColor: '#fafafa',
                            maxWidth: 1035,
                        },
                    },
                    {
                        resolve: `gatsby-remark-external-links`,
                    },
                ],
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
        {
            resolve: `gatsby-plugin-robots-txt`,
            options: {
                resolveEnv: () => NETLIFY_ENV,
                env: {
                    production: {
                        policy: [{ userAgent: '*' }],
                    },
                    'branch-deploy': {
                        policy: [{ userAgent: '*', disallow: ['/'] }],
                        sitemap: null,
                        host: null,
                    },
                    'deploy-preview': {
                        policy: [{ userAgent: '*', disallow: ['/'] }],
                        sitemap: null,
                        host: null,
                    },
                },
            },
        },
    ],
};

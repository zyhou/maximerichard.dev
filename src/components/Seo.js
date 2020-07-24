import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import shareImage from '../images/MAX_DARK.png';

const SEO = ({ description, title }) => {
    const {
        site: { siteMetadata },
    } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        siteUrl
                        description
                        keywords
                        lang
                        author
                        github
                        linkedin
                        twitterHandle
                        twitter
                        twitch
                    }
                }
            }
        `,
    );

    const metaTitle = title || siteMetadata.title;
    const metaDescription = description || siteMetadata.description;
    const metaImage = `${siteMetadata.siteUrl}${shareImage}`;

    const jsonLdObj = {
        '@context': 'http://schema.org',
        '@type': 'WebSite',
        name: siteMetadata.author,
        description: metaDescription,
        author: {
            '@type': 'Person',
            name: siteMetadata.author,
        },
        url: siteMetadata.siteUrl,
        image: metaImage,
        headline: siteMetadata.author,
        sameAs: [siteMetadata.github, siteMetadata.linkedin, siteMetadata.twitter, siteMetadata.twitch],
    };

    return (
        <Helmet
            htmlAttributes={{
                lang: siteMetadata.lang,
            }}
            title={metaTitle}
            defaultTitle={siteMetadata.title}
            titleTemplate={`%s | ${siteMetadata.title}`}
        >
            {/* General tags */}
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={siteMetadata.keywords} />
            <meta name="author" content={siteMetadata.author} />
            <meta name="copyright" content={siteMetadata.author} />
            <meta name="image" content={metaImage} />
            {/* OpenGraph tags */}
            <meta property="og:locale" content="fr_FR" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={metaTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={metaImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:url" content={siteMetadata.url} />
            {/* Twitter Card tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={siteMetadata.twitterHandle} />
            <meta name="twitter:title" content={metaTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={metaImage} />
            <meta name="twitter:url" content={siteMetadata.url} />
            {/* Schema.org JSON-LD */}
            <script type="application/ld+json">{JSON.stringify(jsonLdObj)}</script>
        </Helmet>
    );
};

SEO.defaultProps = {
    title: ``,
    description: ``,
};

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
};

export default SEO;

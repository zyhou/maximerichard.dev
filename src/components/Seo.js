import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ description, title }) => {
    const {
        site: { siteMetadata },
    } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        titleNavigation
                        siteUrl
                        logo
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

    const metaDescription = description || siteMetadata.description;
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
        image: siteMetadata.logo,
        headline: siteMetadata.author,
        sameAs: [siteMetadata.github, siteMetadata.linkedin, siteMetadata.twitter, siteMetadata.twitch],
    };

    return (
        <Helmet
            htmlAttributes={{
                lang: siteMetadata.lang,
            }}
            title={title}
            defaultTitle={siteMetadata.titleNavigation}
            titleTemplate={`%s | ${siteMetadata.titleNavigation}`}
        >
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={siteMetadata.keywords} />
            <meta name="author" content={siteMetadata.author} />
            <meta name="copyright" content={siteMetadata.author} />
            <meta property="og:locale" content="fr_FR" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={siteMetadata.title} />
            <meta property="og:description" content={metaDescription} />
            <meta name="og:image" content="https://zyhou.github.io/images/card.jpg" />
            <meta property="og:url" content={siteMetadata.url} />
            <meta property="twitter:card" content="summary" />
            <meta name="twitter:site" content={siteMetadata.twitter} />
            <meta property="twitter:creator" content={siteMetadata.twitterHandle} />
            <meta property="twitter:title" content={siteMetadata.title} />
            <meta property="`twitter:description" content={metaDescription} />
            <meta name="twitter:image" content="https://zyhou.github.io/images/card.jpg" />
            <meta name="twitter:url" content={siteMetadata.url} />
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

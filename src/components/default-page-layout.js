import * as React from 'react';
import PropTypes from 'prop-types';
import { MDXProvider } from '@mdx-js/react';

import Layout from './Layout';
import SEO from './Seo';

const PageLayout = ({ children, pageContext: { frontmatter } }) => (
    <Layout>
        <SEO title={frontmatter.title} description={frontmatter.description} />
        <section className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
            <MDXProvider>{children}</MDXProvider>
        </section>
    </Layout>
);

PageLayout.propTypes = {
    children: PropTypes.node.isRequired,
    pageContext: PropTypes.shape({
        frontmatter: PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        }),
    }),
};

export default PageLayout;

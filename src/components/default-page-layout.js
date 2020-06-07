import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';

const H1 = (props) => <h1 {...props}>{props.children}</h1>;
const Paragraph = (props) => <p {...props} />;
const Link = (props) => <RouterLink className="inline-block mb-6" {...props} />;

const components = {
    h1: H1,
    p: Paragraph,
    a: Link,
};

const PageLayout = ({ children, pageContext: { frontmatter } }) => (
    <Layout>
        <SEO title={frontmatter.title} />
        <MDXProvider components={components}>{children}</MDXProvider>
    </Layout>
);

H1.propTypes = {
    children: PropTypes.node.isRequired,
};

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

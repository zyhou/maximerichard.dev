import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import SEO from '../components/Seo';

const IndexPage = () => {
    const { desktopImage } = useStaticQuery(graphql`
        query {
            desktopImage: file(relativePath: { eq: "large.png" }) {
                childImageSharp {
                    fluid(maxWidth: 650) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    return (
        <Layout>
            <SEO />
            <section className="flex flex-wrap justify-center lg:justify-between items-center">
                <article className="m-4 w-4/5 md:w-3/5 lg:w-2/5 sm:text-base lg:text-lg xl:text-xl">
                    <p className="font-bold leading-tight">
                        <Link to="/apropos/" className="text-blue-500 hover:text-blue-700">
                            Salut, moi c&apos;est Maxime
                        </Link>
                    </p>
                    <h1 className="mb-5 leading-loose font-mono font-bold text-xl md:text-3xl lg:text-2xl xl:text-3xl">
                        Développeur full stack
                    </h1>
                    <p className="mb-5 leading-snug">
                        Je travaille chez{' '}
                        <a className="text-underline text-blue-500 hover:text-blue-700" href="https://marmelab.com/">
                            Marmelab
                        </a>{' '}
                        à Nancy. J&apos;aime l&apos;open source, utiliser des claviers mécaniques et personnaliser
                        Linux.
                    </p>
                    <p className="mb-5 leading-snug">
                        Je partage ma veille technique sur{' '}
                        <a
                            className="text-underline text-blue-500 hover:text-blue-700"
                            href="https://twitter.com/rmaximedev/"
                        >
                            Twitter
                        </a>
                        .
                    </p>
                    <Link to="/apropos/" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
                        En savoir plus
                    </Link>
                </article>
                <Img
                    className="m-4 w-full sm:w-4/5 md:w-3/5 lg:w-2/5 flex-wrap rounded-md object-contain"
                    fluid={desktopImage.childImageSharp.fluid}
                />
            </section>
        </Layout>
    );
};

export default IndexPage;

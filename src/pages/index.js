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
            <section className="flex flex-wrap justify-center lg:justify-between items-center my-6">
                <article className="m-4 w-4/5 md:w-3/5 lg:w-2/5">
                    <h2 className="font-bold font-serif text-xl leading-tight mb-3">Salut, moi c&apos;est Maxime</h2>
                    <p className="mb-5">
                        Je suis développeur <strong>Javascript</strong> et <strong>Node</strong>
                    </p>
                    <p className="mb-5">
                        Je partage mon quotidien sur Twitter et j&apos;écris des articles sur mon blog
                    </p>
                    <Link to="/about/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        En savoir plus
                    </Link>
                </article>
                <Img
                    className="m-4 w-full sm:w-4/5 md:w-3/5 lg:w-2/5  flex-wrap rounded-md object-contain"
                    fluid={desktopImage.childImageSharp.fluid}
                />
            </section>
        </Layout>
    );
};

export default IndexPage;

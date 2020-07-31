import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import { Projects } from '../components/Projects';

import { Github, Twitch, Twitter } from '../components/Icons';

const IndexPage = () => {
    const {
        desktopImage,
        site: { siteMetadata },
    } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    github
                    twitter
                    twitch
                }
            }

            desktopImage: file(relativePath: { eq: "desk_me.jpg" }) {
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
                        <a
                            className="text-underline text-blue-500 hover:text-blue-700"
                            href="https://marmelab.com/"
                            rel="nofollow noopener noreferrer"
                            target="_blank"
                        >
                            Marmelab
                        </a>{' '}
                        à Nancy. J&apos;aime{' '}
                        <a
                            className="text-underline text-blue-500 hover:text-blue-700"
                            href={siteMetadata.github}
                            rel="nofollow noopener noreferrer"
                            target="_blank"
                        >
                            l&apos;open source
                        </a>
                        , utiliser des claviers mécaniques et{' '}
                        <Link to="/setup/" className="text-underline text-blue-500 hover:text-blue-700">
                            personnaliser Linux
                        </Link>
                        .
                    </p>
                    <p className="mb-5 leading-snug">
                        Je partage ma veille technique sur{' '}
                        <a
                            className="text-underline text-blue-500 hover:text-blue-700"
                            href={siteMetadata.twitter}
                            rel="nofollow noopener noreferrer"
                            target="_blank"
                        >
                            Twitter
                        </a>
                        .
                    </p>
                    <Link to="/apropos/" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
                        En savoir plus
                    </Link>
                </article>
                <div className="m-4 w-full sm:w-4/5 md:w-3/5 lg:w-2/5 flex-wrap">
                    <Img
                        alt="Bureau de Maxime Richard"
                        className="rounded-md object-contain"
                        fluid={desktopImage.childImageSharp.fluid}
                    />
                    <div className="flex items-center justify-around mt-5 text-xs">
                        <a
                            href={siteMetadata.twitter}
                            className="flex items-center h-6 text-gray-600 hover:text-blue-400"
                        >
                            <Twitter />
                            <span className="ml-2">Twitter</span>
                        </a>
                        <a
                            href={siteMetadata.twitch}
                            className="flex items-center h-6 text-gray-600 hover:text-purple-600"
                        >
                            <Twitch />
                            <span className="ml-2">Twitch</span>
                        </a>
                        <a href={siteMetadata.github} className="flex items-center h-6 text-gray-600 hover:text-black">
                            <Github />
                            <span className="ml-2">GitHub</span>
                        </a>
                    </div>
                </div>
            </section>
            <section className="pt-10">
                <Projects />
            </section>
        </Layout>
    );
};

export default IndexPage;

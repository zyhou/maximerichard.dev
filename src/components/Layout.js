import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import { Github, Linkedin, Twitch, Twitter } from './Icons';

const Layout = ({ children }) => {
    const {
        site: { siteMetadata },
        avatarImage,
    } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                    github
                    linkedin
                    twitter
                    twitch
                }
            }

            avatarImage: file(relativePath: { eq: "MAX_DARK.png" }) {
                childImageSharp {
                    fixed(width: 48) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `);

    return (
        <div className="antialiased font-normal text-gray-700 max-w-6xl mx-auto">
            <header className="flex flex-wrap items-center justify-center py-4 sm:justify-between">
                <Link to="/" className="flex items-center">
                    <Img
                        alt="Photo de Maxime Richard"
                        className="rounded-full m-2"
                        fixed={avatarImage.childImageSharp.fixed}
                    />
                    <span className="font-bold">{siteMetadata.author}</span>
                </Link>
                <nav>
                    <ul className="flex">
                        <li className="px-4">
                            <Link to="/" className="hover:font-bold">
                                accueil
                            </Link>
                        </li>
                        <li className="px-4">
                            <Link to="/setup" className="hover:font-bold">
                                setup
                            </Link>
                        </li>
                        <li className="px-4">
                            <Link to="/apropos" className="hover:font-bold">
                                à propos
                            </Link>
                        </li>
                        <li className="px-4">
                            <Link to="/contact" className="hover:font-bold">
                                contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className="px-4 pt-8 pb-4 max-w-3xl mx-auto lg:max-w-4xl lg:px-8 xl:max-w-6xl">{children}</main>
            <footer className="flex flex-col items-center justify-center text-xl p-4">
                <div className="flex justify-center my-4">
                    <p className="px-1">© {new Date().getFullYear()}</p>
                    <a href="/" className="px-1 font-bold">
                        {siteMetadata.author}
                    </a>
                </div>
                <div className="flex items-center justify-center">
                    <a
                        href={siteMetadata.twitter}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="h-6 mr-4 text-gray-600 hover:text-blue-400"
                    >
                        <Twitter />
                    </a>
                    <a
                        href={siteMetadata.twitch}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="h-6 mr-4 text-gray-600 hover:text-purple-600"
                    >
                        <Twitch />
                    </a>
                    <a
                        href={siteMetadata.linkedin}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="h-6 mr-4 text-gray-600 hover:text-blue-600"
                    >
                        <Linkedin />
                    </a>

                    <a
                        href={siteMetadata.github}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="h-6 mr-4 text-gray-600 hover:text-black"
                    >
                        <Github />
                    </a>
                </div>
            </footer>
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;

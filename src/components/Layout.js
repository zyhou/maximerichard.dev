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

            avatarImage: file(relativePath: { eq: "avatar.png" }) {
                childImageSharp {
                    fixed(width: 48) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `);

    return (
        <div className="min-h-screen font-normal text-gray-700 max-w-6xl mx-auto">
            <header className="flex flex-wrap items-center justify-center py-4 sm:justify-between">
                <Link to="/" className="flex items-center">
                    <Img className="rounded-full m-2" fixed={avatarImage.childImageSharp.fixed} />
                    <h1 className="font-bold">{siteMetadata.author}</h1>
                </Link>
                <nav>
                    <ul className="flex">
                        <li className="w-24">
                            <Link to="/" className="hover:font-bold">
                                /accueil
                            </Link>
                        </li>
                        <li className="w-24">
                            <Link to="/apropos" className="hover:font-bold">
                                /à propos
                            </Link>
                        </li>
                        <li className="w-24">
                            <Link to="/contact" className="hover:font-bold">
                                /contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>{children}</main>
            <footer className="flex flex-col items-center justify-center text-xl md:mt-12 lg:mt-16 xl:mt-20">
                <div className="flex justify-center my-4">
                    <p className="px-1">© {new Date().getFullYear()}</p>
                    <a href="/" className="px-1 font-bold">
                        {siteMetadata.author}
                    </a>
                </div>
                <div className="flex items-center justify-center">
                    <a
                        href={siteMetadata.github}
                        aria-label="github repo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2"
                    >
                        <Github />
                    </a>
                    <a
                        href={siteMetadata.linkedin}
                        aria-label="linkedin account"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2"
                    >
                        <Linkedin />
                    </a>
                    <a
                        href={siteMetadata.twitch}
                        aria-label="twitch account"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2"
                    >
                        <Twitch />
                    </a>
                    <a
                        href={siteMetadata.twitter}
                        aria-label="twitter account"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2"
                    >
                        <Twitter />
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
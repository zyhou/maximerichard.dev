import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const projects = [
    {
        id: 'aperoWebImage',
        title: 'Apéro Web Nancy',
        link: 'https://aperowebnancy.netlify.app/',
        linkText: 'Voir le site web',
        description: `Je gère le Meetup, une fois par mois environ 40 développeurs se retrouvent pour parler technique autour d'une bière.`,
    },
    {
        id: 'lorraineTechHubImage',
        title: 'Lorraine Tech Hub',
        link: 'https://discord.gg/Q8X8Bxq',
        linkText: 'Rejoindre le Discord',
        description: `J'ai créé et j'anime un Discord communautaire qui rassemble les développeurs de Lorraine, c'est un endroit d'échanges et de partage.`,
    },
    {
        id: 'gremlinsImage',
        title: 'Gremlins.js',
        link: 'https://github.com/marmelab/gremlins.js',
        linkText: 'Voir sur Github',
        description: `Librairie de monkey testing pour vérifier la robustesse des applications web en libérant une horde de gremlins.`,
    },
];

const Project = ({ image, link, title, description, linkText }) => (
    <article className="sm:flex-1 px-4 lg:px-4 mb-8 md:mb-0">
        <a href={link} className="block my-0 mx-auto w-1/5 md:w-2/6" rel="nofollow noopener noreferrer" target="_blank">
            <Img alt={title} className="rounded-md object-contain" fluid={image.childImageSharp.fluid} />
        </a>
        <div className="rounded-lg shadow-lg -mt-20 pt-24 md:pt-32 pb-8 px-10 md:px-6 lg:px-8 h-full">
            <h2 className="text-xl font-bold">
                <a href={link} rel="nofollow noopener noreferrer" target="_blank">
                    {title}
                </a>
            </h2>
            <p className="my-6 text-base">{description}</p>
            <a
                className="font-medium uppercase text-sm tracking-widest no-underline text-blue-500 hover:text-blue-700"
                href={link}
                rel="nofollow noopener noreferrer"
                target="_blank"
            >
                {linkText} &rarr;
            </a>
        </div>
    </article>
);

Project.propTypes = {
    image: PropTypes.object.isRequired,
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
};

const query = graphql`
    fragment squareImage on File {
        childImageSharp {
            fluid(maxWidth: 420, maxHeight: 420) {
                ...GatsbyImageSharpFluid
            }
        }
    }

    query {
        aperoWebImage: file(relativePath: { eq: "apero_web_logo.png" }) {
            ...squareImage
        }
        lorraineTechHubImage: file(relativePath: { eq: "lorraine_tech_hub.png" }) {
            ...squareImage
        }
        gremlinsImage: file(relativePath: { eq: "gremlins.png" }) {
            ...squareImage
        }
    }
`;

export const Projects = () => {
    const images = useStaticQuery(query);

    return (
        <React.Fragment>
            <h2 className="text-center font-bold mb-10 text-2xl md:text-3xl lg:text-2xl xl:text-3xl">Projects</h2>
            <div className="md:flex mb-10 lg:mb-16">
                {projects.map((project) => (
                    <Project key={project.id} {...project} image={images[project.id]} />
                ))}
            </div>
            <div className="text-center">
                <p className="text-sm sm:text-base text-gray-700">
                    +{' '}
                    <a
                        href="https://github.com/zyhou/dotfiles"
                        className="text-underline text-blue-500 hover:text-blue-700"
                        rel="nofollow noopener noreferrer"
                        target="_blank"
                    >
                        Dotfiles
                    </a>
                    , mon setup de développeur sur Linux.
                    <br />+{' '}
                    <a
                        href="https://github.com/zyhou/maximerichard.dev"
                        className="text-underline text-blue-500 hover:text-blue-700"
                        rel="nofollow noopener noreferrer"
                        target="_blank"
                    >
                        maximerichard.dev
                    </a>
                    , ce site web avec Gatsby et MDX.
                    <br />+{' '}
                    <a
                        href="https://github.com/zyhou/react-apollo-ssr"
                        className="text-underline text-blue-500 hover:text-blue-700"
                        rel="nofollow noopener noreferrer"
                        target="_blank"
                    >
                        React Apollo SSR
                    </a>
                    , GraphQl, code splitting et hot reload (HMR).
                    <br />+{' '}
                    <a
                        href="https://github.com/zyhou/journee-mondiale"
                        className="text-underline text-blue-500 hover:text-blue-700"
                        rel="nofollow noopener noreferrer"
                        target="_blank"
                    >
                        Journée mondiale
                    </a>
                    , un CLI qui liste les différentes journées mondiales du jour.
                </p>
            </div>
        </React.Fragment>
    );
};

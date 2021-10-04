import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/Seo';

const NotFoundPage = () => (
    <Layout>
        <SEO title="Erreur 404" />
        <section className="flex flex-col flex-wrap justify-center lg:justify-between items-center">
            <h1 className="leading-loose font-mono font-bold text-6xl">Oups</h1>
            <p className="leading-snug text-4xl mb-12">C&apos;est une 404.</p>
            <p className="leading-relaxed mb-6 max-w-2xl">
                Désolé - peut-être une faute de frappe dans l&apos;URL, ou peut-être que cette page a été déplacée ?
                Quoi qu&apos;il en soit, profitez de cette belle page d&apos;erreur que j&apos;ai faite pour vous.
            </p>
            <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Retourner à l&apos;accueil
            </Link>
        </section>
    </Layout>
);

export default NotFoundPage;

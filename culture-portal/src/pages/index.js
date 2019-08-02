import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from '../components/Link';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Footer from '../components/footer';
import AuthorOfTheDay from '../components/author-of-the-day';

import '../components/translate/i18n';

const IndexPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <section className="background"><Layout /></section>
      <main>
        <SEO title="Home" />
        <h1>{t('welcome')}</h1>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }} />
        <Link to="/author/">Go to Author Page</Link>
        <br />
        <Link to="/page-2/">Go to page 2</Link>
        <AuthorOfTheDay />
        <Footer />
      </main>
      <footer>© Портал белорусских фотографов 2019</footer>
    </div>
  );
};

export default IndexPage;

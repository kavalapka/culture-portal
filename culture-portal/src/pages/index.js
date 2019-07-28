import React from 'react';
import { Link } from 'gatsby';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import Footer from '../components/footer';

import Translate from '../components/translate';
import '../components/translate/i18n';

const IndexPage = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <SEO title="Home" />
      <Button>I am Button from Bootstrap</Button>
      <button type="button">Another button</button>
      <Translate />
      <h1>{t('welcome')}</h1>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
        <Image />
      </div>
      <Link to="/search/">Go to page 2</Link>
      <Footer />
    </Layout>
  );
};

export default IndexPage;

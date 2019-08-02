import React from 'react';
import { useTranslation } from 'react-i18next';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Link from '../components/Link';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Footer from '../components/footer';
import AuthorOfTheDay from '../components/author-of-the-day';

import '../components/translate/i18n';

const IndexPage = (props) => {
  const { t } = useTranslation();
  const { data } = props;

  return (
    <Layout>
      <SEO title="Home" />
      <h1>{t('welcome')}</h1>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }} />
      <br />
      <Link to="/page-2/">Go to page 2</Link>
      <AuthorOfTheDay data={data} />
      <Footer />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
query {
  allJavascriptFrontmatter {
    edges {
      node {
        frontmatter {
          science
          authorImage
          birthDate
          death
          name
          path
          lng
        }
      }
    }
  }
}
`;

IndexPage.defaultProps = {
  data: {},
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    allJavascriptFrontmatter: PropTypes.object,
  }),
};

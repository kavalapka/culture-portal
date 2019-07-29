import React from 'react';

import { withTranslation } from 'react-i18next';
import { graphql } from 'gatsby';
import i18n from 'i18next';
import PropTypes from 'prop-types';
import Link from '../components/Link';

import Layout from '../components/layout';
import SEO from '../components/seo';


const Authors = (props) => {
  const { authors } = props;
  const authorsWithSelectedLang = authors.filter(it => it.node.frontmatter.lng === i18n.language);
  const authorsList = authorsWithSelectedLang
    .map(edge => <Link key={edge.node.frontmatter.title}>{edge.node.frontmatter.title}</Link>);
  return (
    <ul>
      <h1>List</h1>
      {authorsList}
    </ul>
  );
};
Authors.defaultProps = {
  authors: [],
};
Authors.propTypes = {
  authors: PropTypes.arrayOf(PropTypes.object),
};

export const query = graphql`
query {
  allJavascriptFrontmatter {
    edges {
      node {
        frontmatter {
          title
          path
          lng
        }
      }
    }
  }
}
`;

class ListPage extends React.Component {
  constructor(props) {
    super(props);
    const { data } = this.props;

    if (data.allJavascriptFrontmatter) {
      this.state = { authors: data.allJavascriptFrontmatter.edges };
    } else {
      this.state = { authors: {} };
    }
  }

  render() {
    const { t } = this.props;
    const { authors } = this.state;
    return (
      <Layout>
        <SEO title="Page two" />
        <Link to="/">{t('Go back to the homepage')}</Link>
        <h1>{t('List of Authors')}</h1>
        <Authors authors={authors} />
      </Layout>
    );
  }
}

export default withTranslation()(ListPage);

ListPage.defaultProps = {
  data: {},
};

ListPage.propTypes = {
  data: PropTypes.shape({
    allJavascriptFrontmatter: PropTypes.object,
  }),
  t: PropTypes.func.isRequired,
};

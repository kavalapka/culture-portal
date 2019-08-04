import React from 'react';
import { useTranslation, withTranslation } from 'react-i18next';
import { graphql, navigate } from 'gatsby';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Search from '../components/Search';
import '../components/translate/i18n';


const Authors = (props) => {
  const { authors } = props;
  const { i18n } = useTranslation();
  const authorsWithSelectedLang = authors.filter(it => it.node.frontmatter.lng === i18n.language);
  return (
    <ul className="ml-0">
      <Search key={uniqueId()} basicAuthors={authorsWithSelectedLang} />
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
          birthPlace
          authorImage
          birthDate
          name
          path
          lng
        }
      }
    }
  }
}
`;

class ListPage extends React.Component {
  render() {
    console.log('render list');
    const { t, data } = this.props;
    return (
      <div>
        <Layout />
        <main>
          <SEO title="Page two" />
          <Authors authors={data.allJavascriptFrontmatter.edges} />
        </main>
        <footer>{t('footer')}</footer>
      </div>
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
};

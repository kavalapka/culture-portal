import React from 'react';
import { withTranslation } from 'react-i18next';
import { graphql } from 'gatsby';
import i18n from 'i18next';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Search from '../components/Search';


const Authors = (props) => {
  const { authors } = props;
  const authorsWithSelectedLang = authors.filter(it => it.node.frontmatter.lng === i18n.language);
  return (
    <ul className="ml-0">
      <Search basicAuthors={authorsWithSelectedLang} />
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
    const { authors } = this.state;
    return (
      <div>
        <Layout />
        <main>
          <SEO title="Page two" />
          <Authors authors={authors} />
        </main>
        <footer>© Портал белорусских фотографов 2019</footer>
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

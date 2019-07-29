import React from 'react';

// import { Link } from 'gatsby';
import { Button } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import { StaticQuery, graphql } from 'gatsby';
import Link from '../components/Link';

import Layout from '../components/layout';
import SEO from '../components/seo';


const Authors = (props) => {
  console.log('Author props: ', props);
  const edges = props.allJavascriptFrontmatter.edges;
  const authors = edges.map(edge => {
    return <li key={edge.node.frontmatter.title}>{edge.node.frontmatter.title}</li>
  })
  console.log('AUTHORS: ', authors);
  return (
    <ul>
      <h1>IM LIST</h1>
      {authors}
    </ul>
  );
}

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
  render() {
    const { t, data } = this.props;
    console.log('props: ', this.props);
    return (
      <Layout>
        <SEO title="Page two" />
        <Link to="/">{t('Go back to the homepage')}</Link>
        <h1>{t('List of Authors')}</h1>
        <Button>Welcome to page 2</Button>
        <StaticQuery query={query} render={ props => <Authors {...props} /> }></StaticQuery>
        <ul>
          <Link to="/Tsyhanova">Tsyhanova</Link>
          <br />
          <Link to="/Avraam">Avraam</Link>
        </ul>
      </Layout>
    );
  }
}

export default withTranslation()(ListPage);


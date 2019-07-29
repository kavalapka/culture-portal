import React from 'react';

// import { Link } from 'gatsby';
import { Button } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import Link from '../components/Link';

import Layout from '../components/layout';
import SEO from '../components/seo';


class ListPage extends React.Component {
  render() {
    const { t } = this.props;
    console.log('props: ', this.props);
    return (
      <Layout>
        <SEO title="Page two" />
        <Link to="/">Go back to the homepage</Link>
        <h1>{t('List of Authors')}</h1>
        <Button>Welcome to page 2</Button>
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

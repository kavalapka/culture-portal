import React from 'react';
import { Link } from 'gatsby';
import { Button } from 'react-bootstrap';

import Layout from '../components/layout';
import SEO from '../components/seo';

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <Button>Welcome to page 2</Button>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;

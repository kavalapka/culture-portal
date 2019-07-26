import React from 'react';
import { Link } from 'gatsby';
import { Button } from 'react-bootstrap';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <Link to="/search/">Search</Link>
    <Button type="button">I am Button from Bootstrap</Button>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
  </Layout>
);

export default IndexPage;

import React from 'react';
import { Link } from 'gatsby';
import { Button } from 'react-bootstrap';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import Footer from '../components/footer';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <Button>I am Button from Bootstrap</Button>
    <button>Another button</button>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <Footer />
  </Layout>
);

export default IndexPage;

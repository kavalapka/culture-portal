import React from 'react';
import { Link } from 'gatsby';
import { Button } from 'react-bootstrap';

import Layout from '../components/layout';
import SEO from '../components/seo';

import TimeLine from '../components/timeLine';

const SecondPage = () => (
  <div>
    <Layout />
    <main>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <Button>Welcome to page 2</Button>
      <Link to="/">Go back to the homepage</Link>
      <TimeLine />
    </main>
  </div>
);

export default SecondPage;

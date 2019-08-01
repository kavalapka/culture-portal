import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Footer from '../components/footer';
import AuthorOfTheDay from '../components/author-of-the-day';
import MainSlider from '../components/main-slider/main-slider';

import '../components/translate/i18n';
import Description from '../components/portal-description/description';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MainSlider />
    <Description />
    <AuthorOfTheDay />
    <Footer />
  </Layout>
);

export default IndexPage;

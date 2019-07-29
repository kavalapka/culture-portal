import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';
import Link from '../components/Link';

import Layout from '../components/layout';


export default function Template(props) {
  const { data } = props;
  console.log('template data: ', props);
  const { frontmatter } = data.javascriptFrontmatter;
  const { t } = useTranslation();
  return (
    <Layout>
      <div className="blog-post">
        <Link to="/">{t('home')}</Link>
        <br />
        <Link to="/search">Search</Link>
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.birth}</p>
        <p>{frontmatter.description}</p>
        <img alt="" style={{ width: '200px' }} src={frontmatter.authorImage} />
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($searchPath: String!, $lang: String!) {
    javascriptFrontmatter(frontmatter: {path: {eq: $searchPath}, lng: {eq: $lang}}) {
    frontmatter {
      birth
      title
      description
      authorImage
    }
  }
  }
`;



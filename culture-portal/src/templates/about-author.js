import React from 'react';
import { graphql, Link } from 'gatsby';

import { Button } from 'react-bootstrap';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

export default function Template({ data }) {
  console.log('template data: ', data);
  const { frontmatter } = data.javascriptFrontmatter;
  return (
    <div className="blog-post">
      <Link to="/">Home</Link>
      <br />
      <Link to="search">Search</Link>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.birth}</p>
      <p>{frontmatter.description}</p>
      <img alt="" style={{ width: '200px' }} src={frontmatter.authorImage} />
    </div>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    javascriptFrontmatter(frontmatter: {path: {eq: $path}}) {
    frontmatter {
      birth
      title
      description
      authorImage
    }
  }
  }
`;

// const AboutAuthor = () => (
//   <Layout>
//     <Link to="/page-1/">Home</Link>
//     <Link to="/page-2/">List of Authors</Link>
//     <h1>Author name</h1>
//     <p>About author</p>
//     <p>Here timeline</p>
//     <p>Photo Exhibitions</p>
//     <Button>I am Video</Button>
//     <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
//       <Image />
//     </div>
//   </Layout>
// );

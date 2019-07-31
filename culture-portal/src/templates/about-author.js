import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Photo from '../components/image';
import Link from '../components/Link';


import Layout from '../components/layout';
import TimeLine from '../components/timeLine';
import Video from '../components/video';

import './about-author.css';

export default function Template(props) {
  const { data } = props;
  const { frontmatter } = data.javascriptFrontmatter;
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="blog-post">
        <Link to="/">{t('home')}</Link>
        <br />
        <Link to="/search">Search</Link>
        <h1>{frontmatter.title}</h1>
        <Video />
        <p>{frontmatter.birth}</p>
        <p>{frontmatter.description}</p>
        <Photo className="avatar" imgsrc={frontmatter.authorImage} />
        <TimeLine />
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

Template.defaultProps = {
  data: {},
};

Template.propTypes = {
  data: PropTypes.shape({
    javascriptFrontmatter: PropTypes.object,
  }),
};

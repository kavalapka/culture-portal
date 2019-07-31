import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Photo from '../components/image';

import Layout from '../components/layout';
import TimeLine from '../components/timeLine';
import Video from '../components/video';

import './about-author.css';

export default function Template(props) {
  const { data } = props;
  const { frontmatter } = data.javascriptFrontmatter;

  return (
    <Layout>
      <div className="blog-post">
        <h1>{frontmatter.name}</h1>
        <p>{frontmatter.birthDate}</p>
        <p>{frontmatter.description}</p>
        <Photo className="avatar" imgsrc={frontmatter.authorImage} />
        <p>{frontmatter.science}</p>
        <Video youtubeId={frontmatter.youtube} start={frontmatter.youtubeStart || 1} />
        <TimeLine />
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($searchPath: String!, $lang: String!) {
    javascriptFrontmatter(frontmatter: {path: {eq: $searchPath}, lng: {eq: $lang}}) {
    frontmatter {
      birthDate
      name
      science
      authorImage
      youtube
      youtubeStart
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

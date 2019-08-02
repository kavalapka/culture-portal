import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import TimeLine from '../components/timeLine';
import Video from '../components/video';
import AutorDescription from '../components/author-description';

import './about-author.css';

export default function Template(props) {
  const { data } = props;
  const { frontmatter } = data.javascriptFrontmatter;
  return (
    <Layout>
      <div className="blog-post">
        <AutorDescription data={frontmatter} />
        <Video youtubeId={frontmatter.youtube} start={frontmatter.youtubeStart || 0} />
        <TimeLine activity={frontmatter.activity} />
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
      death
      activity{date, description}
      works
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

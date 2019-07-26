/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const aboutAuthorTemplate = path.resolve('src/templates/about-author.js');
  const result = await graphql(`
    {
      allJavascriptFrontmatter {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    console.log(result.errors);
    throw new Error('Things broke, see console output above');
  }
  result.data.allJavascriptFrontmatter.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: aboutAuthorTemplate,
      context: {}, // additional data can be passed via context
    });
  });
};

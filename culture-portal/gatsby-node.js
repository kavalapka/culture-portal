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
              lng
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

  const indexPage = path.resolve('src/pages/index.js');
  const searchPage = path.resolve('src/pages/search.js');
  const page2 = path.resolve('src/pages/page-2.js');
  ['en', 'ru', 'by'].forEach(
    (lang) => {
      createPage({ path: `/${lang}/`, component: indexPage });
      createPage({ path: `/${lang}/search`, component: searchPage });
      createPage({ path: `/${lang}/page-2`, component: page2 });
    },
  );
};

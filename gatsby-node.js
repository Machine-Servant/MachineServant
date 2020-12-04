/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const { kebabCase } = require('lodash');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const BlogPost = path.resolve(`src/templates/BlogPost/BlogPost.tsx`);
  const TaggedPosts = path.resolve(`src/templates/TaggedPosts/TaggedPosts.tsx`);
  const BlogPostList = path.resolve(
    `src/templates/BlogPostList/BlogPostList.tsx`
  );

  const result = await graphql(`
    {
      postsRemark: allMarkdownRemark(
        filter: { frontmatter: { published: { eq: true } } }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              date
              title
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(
        limit: 2000
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
    return;
  }

  const postsPerPage = 5;
  const numPages = Math.ceil(
    result.data.postsRemark.edges.length / postsPerPage
  );
  Array.from({ length: numPages }).forEach((_item, i) => {
    const blogPostListPath = i === 0 ? `/blog` : `/blog/${i + 1}`;
    createPage({
      path: blogPostListPath,
      component: BlogPostList,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
        totalCount: result.data.postsRemark.edges.length,
      },
    });
    console.info(`Created Blog List Page: ${blogPostListPath}`);
  });

  result.data.postsRemark.edges.forEach(({ node }) => {
    const { slug } = node.fields;
    const blogPath = `/blog${slug}`;
    createPage({
      path: blogPath,
      component: BlogPost,
      context: { slug },
    });

    console.log(`Created Blog Post: ${blogPath}`);
  });

  result.data.tagsGroup.group.forEach((tag) => {
    createPage({
      path: `/tags/${kebabCase(tag.fieldValue)}/`,
      component: TaggedPosts,
      context: {
        tag: tag.fieldValue,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode, basePath: 'content/blog' });
    createNodeField({
      name: 'slug',
      node,
      value,
    });
  }
};

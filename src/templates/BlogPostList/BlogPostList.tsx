import { graphql } from 'gatsby';

import { BlogPostList } from '../../components/BlogPostList';

export default BlogPostList;

export const pageQuery = graphql`
  query BlogPageQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { frontmatter: { published: { eq: true } } }
      limit: $limit
      skip: $skip
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          excerpt(pruneLength: 160)
        }
      }
    }
  }
`;

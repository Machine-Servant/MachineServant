import { graphql } from 'gatsby';

import { BlogPage } from '../components/BlogPage';

export default BlogPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { published: { eq: true } } }
      limit: 2000
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

import React from 'react';

import { graphql } from 'gatsby';
import { FluidObject } from 'gatsby-image';

import { Layout } from '../../components/Layout';
import { MainBlurb } from '../../components/MainBlurb';
import { Posts } from '../../components/Posts';

interface IEdges {
  node: {
    fields: {
      slug: string;
    };
    frontmatter: {
      date: string;
      title: string;
      featuredImage: {
        childImageSharp: {
          fluid: FluidObject;
        };
      };
    };
    excerpt: string;
  };
}

interface ITaggedPosts {
  data: {
    allMarkdownRemark: {
      edges: IEdges[];
    };
  };
  pageContext: {
    tag: string;
  };
}

const TaggedPosts: React.FC<ITaggedPosts> = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <MainBlurb
        image="gears-transparent.png"
        header={`Posts tagged with #${tag}`}
      />
      <Posts posts={posts} />
    </Layout>
  );
};

export default TaggedPosts;

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] }, published: { eq: true } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            featuredImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            title
          }
          excerpt
        }
      }
    }
  }
`;

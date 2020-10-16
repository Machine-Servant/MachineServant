/* eslint-disable @typescript-eslint/ban-ts-ignore */
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import { graphql } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import RehypeReact from 'rehype-react';

import { Layout } from '../../components/Layout';
import { MainBlurb } from '../../components/MainBlurb';
import { Tag } from '../../components/Tag';
import { SEO } from '../../components/SEO';

import { Link } from './components/Link';
import {
  BlogPostContainer,
  BlogPostContent,
  InnerContent,
  Pre,
  Header1,
  Header2,
  Header3,
  Header4,
  Header5,
  Header6,
  Paragraph,
  UnorderedList,
  OrderedList,
} from './styles';

interface IBlogPost {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
        author: string;
        tags: string[];
        date: string;
        featuredImage: {
          childImageSharp: {
            fluid: FluidObject;
          };
        };
        featured: {
          childImageSharp: {
            resize: {
              src: string;
              width: number;
              height: number;
            };
          };
        };
        keywords: string[];
      };
      htmlAst: any;
      excerpt: string;
    };
  };
}

// @ts-ignore
const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    // @ts-ignore
    pre: Pre,
    // @ts-ignore
    a: Link,
    // @ts-ignore
    h1: Header1,
    // @ts-ignore
    h2: Header2,
    // @ts-ignore
    h3: Header3,
    // @ts-ignore
    h4: Header4,
    // @ts-ignore
    h5: Header5,
    // @ts-ignore
    h6: Header6,
    // @ts-ignore
    p: Paragraph,
    // @ts-ignore
    ul: UnorderedList,
    // @ts-ignore
    ol: OrderedList,
  },
}).Compiler;

const BlogPost: React.FC<IBlogPost> = ({ data: { markdownRemark: post } }) => {
  const {
    tags,
    author,
    featuredImage,
    featured,
    title,
    date,
    keywords,
  } = post.frontmatter;

  return (
    <Layout>
      <SEO
        title={title}
        description={post.excerpt.replace(/\\n/g, ' ')}
        keywords={keywords}
        image={featured.childImageSharp.resize}
      />
      <MainBlurb
        image={<Img fluid={featuredImage.childImageSharp.fluid} />}
        header={title}
        subHeader={`By ${author} on ${date}`}
      />
      <BlogPostContainer>
        <BlogPostContent>
          <InnerContent>{renderAst(post.htmlAst)}</InnerContent>
        </BlogPostContent>
      </BlogPostContainer>
      <div className="flex flex-col my-6">
        <span className="p-6 text-2xl font-bold text-gray-800">
          <FontAwesomeIcon icon={faTags} /> Tagged as
        </span>
        <div>
          {tags &&
            tags.map(tag => {
              return <Tag key={tag} value={tag} />;
            })}
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      excerpt(pruneLength: 160)
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        author
        tags
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        featured: featuredImage {
          childImageSharp {
            resize(width: 1200) {
              src
              width
              height
            }
          }
        }
        keywords
      }
    }
  }
`;

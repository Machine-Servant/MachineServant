import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

interface IProps {
  name: string;
}

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

export const Image: React.FC<IProps> = ({ name }) => {
  const data = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            fluid {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
  `);

  const image = data.allImageSharp.edges.find(
    // @ts-ignore
    edge => edge.node.fluid.originalName === name
  );

  if (!image) {
    return null;
  }

  return <Img fluid={image.node.fluid} />;
};
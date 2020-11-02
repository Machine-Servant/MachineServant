import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';

interface IImage {
  className?: string;
  name: string;
  alt?: string;
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

interface IEdge {
  node: {
    fluid: FluidObject & { originalName: string };
  };
}

interface IAllImageSharp {
  allImageSharp: {
    edges: IEdge[];
  };
}

export const Image: React.FC<IImage> = ({ className = '', name, alt }) => {
  const data: IAllImageSharp = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
              originalName
            }
          }
        }
      }
    }
  `);

  const image = data.allImageSharp.edges.find(
    edge => edge.node.fluid.originalName === name
  );

  if (!image) {
    return null;
  }

  return <Img className={className} fluid={image.node.fluid} alt={alt} />;
};

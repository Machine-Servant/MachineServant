import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import { FluidObject } from 'gatsby-image';

import { Content } from './styles';

type BackgroundProps = {
  className?: string;
  children: React.ReactNode;
};

type BackgroundQueryProps = {
  file: {
    id: string;
    childImageSharp: {
      fluid: FluidObject;
    };
  };
};

export const Background: React.FC<BackgroundProps> = ({
  className,
  children,
}) => {
  const data = useStaticQuery<BackgroundQueryProps>(graphql`
    query BackgroundQuery {
      file(relativePath: { eq: "background.png" }) {
        id
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <Content
      Tag="div"
      className={className}
      fluid={data.file.childImageSharp.fluid}
      backgroundColor={'#e6e6e6'}
    >
      {children}
    </Content>
  );
};

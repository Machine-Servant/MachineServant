import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';

import { Content } from './styles';

interface IBackground {
  className?: string;
  children: React.ReactNode;
}

export const Background: React.FC<IBackground> = ({ className, children }) => {
  const data = useStaticQuery(graphql`
    query {
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

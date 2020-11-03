/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';

import { Background } from '../Background';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Image } from '../Image';
import { useSiteMetadata } from '../../hooks/useSiteMetadata';

import { Content } from './styles';

import './styles.css';

interface ILayout {
  showHeaderImage?: boolean;
  children: React.ReactNode;
}

export const Layout: React.FunctionComponent<ILayout> = ({
  showHeaderImage = false,
  children,
}) => {
  const { title } = useSiteMetadata();

  return (
    <Background>
      {showHeaderImage && <Image name="machineservant.jpg" />}
      <Header siteTitle={title} />
      <Content>
        <main>{children}</main>
      </Content>
      <Footer />
    </Background>
  );
};

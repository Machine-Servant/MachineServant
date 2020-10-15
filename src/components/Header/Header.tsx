import React from 'react';

import { Link } from 'gatsby';
import { Content, Inner, SiteTitle, SiteLinks } from './styles';

interface IHeader {
  siteTitle?: string;
}

export const Header: React.FunctionComponent<IHeader> = ({
  siteTitle = '',
}) => (
  <Content>
    <Inner>
      <SiteTitle>
        <Link to="/">{siteTitle}</Link>
      </SiteTitle>
      <SiteLinks>
        <div className="lg:flex-grow">
          <Link activeClassName="underline" className="mr-4" to="/blog">
            Blog
          </Link>
          <Link activeClassName="underline" className="mr-4" to="/contact/">
            Contact
          </Link>
          <Link activeClassName="underline" className="mr-4" to="/about">
            About Us
          </Link>
        </div>
      </SiteLinks>
    </Inner>
  </Content>
);

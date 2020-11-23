import React from 'react';

import { Link } from 'gatsby';

import { useSiteMetadata } from '../../hooks/useSiteMetadata';

import { Content, Inner, SiteTitle, SiteLinks } from './styles';

interface IHeader {
  siteTitle?: string;
}

export const Header: React.FunctionComponent<IHeader> = ({
  siteTitle = '',
}) => {
  const { navigation } = useSiteMetadata();

  return (
    <Content>
      <Inner>
        <SiteTitle>
          <Link to="/">{siteTitle}</Link>
        </SiteTitle>
        <SiteLinks>
          <div className="lg:flex-grow">
            {navigation.map(({ name, location }) => (
              <Link
                key={name}
                activeClassName="underline"
                className="mr-4"
                to={location}
              >
                {name}
              </Link>
            ))}
          </div>
        </SiteLinks>
      </Inner>
    </Content>
  );
};

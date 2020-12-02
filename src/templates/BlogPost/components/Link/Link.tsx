import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

import { StyledLink } from './styles';

type LinkProps = {
  as?: React.ComponentType | typeof GatsbyLink;
  href?: string;
  to?: React.ComponentProps<typeof GatsbyLink>['to'];
};

export const Link: React.FC<LinkProps> = ({ children, ...props }) => (
  <StyledLink {...props} rel="noreferrer" target="_blank">
    {children}
  </StyledLink>
);

import React from 'react';

import {
  faMapPin,
  faPhone,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import GitHubButton from 'react-github-btn';

import { SocialLinks } from '../../components/SocialLinks';

import { Contact } from './components/Contact';
import { Content, Inner } from './styles';
import { graphql, useStaticQuery } from 'gatsby';

type FooterQueryProps = {
  site: {
    siteMetadata: {
      contact: string;
    };
  };
};

export const Footer: React.FC = () => {
  const data = useStaticQuery<FooterQueryProps>(graphql`
    query FooterPageQuery {
      site {
        siteMetadata {
          contact
        }
      }
    }
  `);

  return (
    <Content>
      <Inner>
        <div className="flex flex-col items-center justify-center mb-4 sm:mb-0">
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold">Contact MachineServant</h3>
            <Contact icon={faMapPin}>Akron, Ohio</Contact>
            <Contact icon={faPhone}>(330)-285-3015</Contact>
            <Contact icon={faEnvelope}>
              <a
                rel="noreferrer"
                target="_blank"
                href={`mailto:${data.site.siteMetadata.contact}`}
              >
                {data.site.siteMetadata.contact}
              </a>
            </Contact>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <SocialLinks className="mb-4" />
          <div className="mb-2">
            <GitHubButton
              href="https://github.com/machine-servant"
              data-size="large"
              aria-label="Follow @machine-servant on GitHub"
            >
              Follow @machine-servant
            </GitHubButton>
          </div>
          <div>© {new Date().getFullYear()}, MachineServant LLC</div>
        </div>
      </Inner>
    </Content>
  );
};

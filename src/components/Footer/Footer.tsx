import React from 'react';

import {
  faMapPin,
  faPhone,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import GitHubButton from 'react-github-btn';

import { SocialLinks } from '../SocialLinks';
import { useSiteMetadata } from '../../hooks/useSiteMetadata';

import { Contact } from './components/Contact';
import { Content, Inner } from './styles';

export const Footer: React.FC = () => {
  const { contact } = useSiteMetadata();

  return (
    <Content>
      <Inner>
        <div className="flex flex-col items-center justify-center mb-4 sm:mb-0">
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold">Contact MachineServant</h3>
            <Contact icon={faMapPin}>Akron, Ohio</Contact>
            <Contact icon={faPhone}>(330)-285-3015</Contact>
            <Contact icon={faEnvelope}>
              <a rel="noreferrer" target="_blank" href={`mailto:${contact}`}>
                {contact}
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

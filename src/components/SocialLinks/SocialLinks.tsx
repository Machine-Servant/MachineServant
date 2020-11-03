import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faFacebook,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import { useSiteMetadata } from '../../hooks/useSiteMetadata';

import { Icons } from './styles';

interface ISocialLinks {
  className?: string;
}

export const SocialLinks: React.FC<ISocialLinks> = ({ className = '' }) => {
  const {
    social: { linkedIn, facebook, instagram },
  } = useSiteMetadata();
  return (
    <Icons className={className}>
      <a href={linkedIn} title="LinkedIn" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href={facebook} title="Facebook" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href={instagram} title="Instagram" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </Icons>
  );
};

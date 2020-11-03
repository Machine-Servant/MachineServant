/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';

import Helmet from 'react-helmet';

import { useSiteMetadata } from '../../hooks/useSiteMetadata';

interface ISEO {
  description?: string;
  lang?: string;
  meta?: any[];
  title: string;
  keywords?: string[];
  image?: {
    src: string;
    width: number;
    height: number;
  };
}

export const SEO: React.FC<ISEO> = ({
  description = '',
  lang = 'en',
  meta = [],
  title,
  keywords = [],
  image: metaImage,
}) => {
  const {
    title: siteTitle,
    description: siteDescription,
    author,
    image: siteImage,
    siteUrl,
    keywords: siteKeywords,
  } = useSiteMetadata();

  const metaKeywords = keywords && keywords.length ? keywords : siteKeywords;
  const image =
    metaImage && metaImage.src ? `${siteUrl}${metaImage.src}` : null;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${siteTitle}`}
      meta={[
        {
          name: 'description',
          content: description || siteDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: description || siteDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:creator',
          content: author,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: description || siteDescription,
        },
        {
          name: 'keywords',
          content: metaKeywords.join(','),
        },
      ]
        .concat(
          image
            ? [
                {
                  property: 'og:image',
                  content: image,
                },
                {
                  property: 'og:image:width',
                  content:
                    metaImage && metaImage.width ? `${metaImage.width}` : '',
                },
                {
                  property: 'og:image:height',
                  content:
                    metaImage && metaImage.height ? `${metaImage.height}` : '',
                },
                {
                  name: 'twitter:card',
                  content: 'summary_large_image',
                },
              ]
            : [
                {
                  property: 'og:image',
                  content: `${siteUrl}${siteImage}`,
                },
                {
                  name: 'twitter:card',
                  content: 'summary',
                },
              ]
        )
        .concat(meta)}
    />
  );
};

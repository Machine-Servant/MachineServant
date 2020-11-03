import { useStaticQuery, graphql } from 'gatsby';

type SiteMetadataProps = {
  title: string;
  description: string;
  author: string;
  siteUrl: string;
  image: string;
  contact: string;
  keywords: string[];
  social: {
    linkedIn: string;
    facebook: string;
    instagram: string;
  };
};

type SiteMetadataQueryProps = {
  site: {
    siteMetadata: SiteMetadataProps;
  };
};

export const useSiteMetadata = (): SiteMetadataProps => {
  const { site } = useStaticQuery<SiteMetadataQueryProps>(
    graphql`
      query SiteMetaDataQuery {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            image
            contact
            keywords
            social {
              linkedIn
              facebook
              instagram
            }
          }
        }
      }
    `
  );

  return site.siteMetadata;
};

import React from 'react';

import { graphql, Link, useStaticQuery } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import {
  faGlasses,
  faLaptopCode,
  faObjectGroup,
  faTools,
  faUsers,
  faCloud,
} from '@fortawesome/free-solid-svg-icons';

import { Layout } from '../Layout';
import { SEO } from '../SEO';
import { MainBlurb } from '../MainBlurb';

import { ServiceSection } from './components/ServiceSection';
import { Logo } from './components/Logo';
import { Heading } from './components/Heading';
import { LogoWrapper, CenteredLogoText } from './styles';

import GatsbyLogo from './assets/Gatsby-Monogram.svg';
import NodeJsLogo from './assets/nodejs-seeklogo.com.svg';
import PythonLogo from './assets/python-seeklogo.com.svg';
import DjangoLogo from './assets/django-seeklogo.com.svg';
import ReactLogo from './assets/react-seeklogo.com.svg';
import Html5Logo from './assets/html5-with-wordmark-color.svg';
import Css3Logo from './assets/css3-seeklogo.com.svg';
import JavaScriptLogo from './assets/javascript-seeklogo.com.svg';
import TypeScriptLogo from './assets/typescript-seeklogo.com.svg';
import SassLogo from './assets/sass-seeklogo.com.svg';
import PostgresqlLogo from './assets/PostgreSQL_logo.3colors.svg';
import MongoLogo from './assets/mongodb-seeklogo.com.svg';
import TailwindLogo from './assets/tailwind-css-seeklogo.com.svg';
import BootstrapLogo from './assets/bootstrap-seeklogo.com.svg';
import GraphQlLogo from './assets/graphql-seeklogo.com.svg';
import StripeLogo from './assets/stripe-seeklogo.com.svg';
import GithubLogo from './assets/github-seeklogo.com.svg';
import NetlifyLogo from './assets/netlify-seeklogo.com.svg';
import AwsLogo from './assets/aws-seeklogo.com.svg';
import CloudFlareLogo from './assets/cloudflare-seeklogo.com.svg';
import MailChimpLogo from './assets/mailchimp-seeklogo.com.svg';
import ZapierLogo from './assets/zapier-seeklogo.com.svg';
import PodioLogo from './assets/podio-seeklogo.com.svg';
import DockerLogo from './assets/docker-seeklogo.com.svg';
import ContentfulLogo from './assets/contentful-seeklogo.com.svg';
import HerokuLogo from './assets/heroku-seeklogo.com.svg';
import { WebsitePreview } from './components/WebsitePreview';

type ImageProps = {
  childImageSharp: {
    fluid: FluidObject;
  };
};

type AboutPageQueryProps = {
  engelorumora: ImageProps;
  therawtruthbook: ImageProps;
  semprefootball: ImageProps;
  ohiopyle: ImageProps;
  ohiocashflow: ImageProps;
  protagonista: ImageProps;
};

export const AboutPage: React.FC = () => {
  const data = useStaticQuery<AboutPageQueryProps>(graphql`
    query AboutPageQuery {
      engelorumora: file(relativePath: { eq: "engelorumora-thumbnail.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      therawtruthbook: file(
        relativePath: { eq: "therawtruthbook-thumbnail.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      semprefootball: file(
        relativePath: { eq: "semprefootball-thumbnail.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      ohiopyle: file(relativePath: { eq: "ohiopyle-thumbnail.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      ohiocashflow: file(relativePath: { eq: "ohiocashflow-thumbnail.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      protagonista: file(relativePath: { eq: "protagonista-thumbnail.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="About" description="Your vision, our solutions." />
      <MainBlurb
        image="gears.png"
        header="About MachineServant"
        subHeader="Your vision, our solutions."
      />
      <Heading title="Our Services" />
      <ServiceSection heading="Consulting" icon={faGlasses}>
        <p>
          We provide you and your company with consulting and analysis based on
          the latest technologies to help you make the best choices to achieve
          your vision. Our experts will help improve your brand, increase your
          audience, and bring your project to life.
        </p>
      </ServiceSection>
      <ServiceSection heading="Development" icon={faLaptopCode}>
        <p>
          Let our team of expert developers build your project. We can take over
          an existing codebase, or build you something from scratch. We will
          work with you one on one to bring your dream to reality.
        </p>
        <p className="mt-3">
          Websites and web applications of all scales and levels of complexity
          are our speciality.
        </p>
      </ServiceSection>
      <Heading title="Our Technologies" />
      <ServiceSection heading="Frameworks and Libraries" icon={faObjectGroup}>
        <LogoWrapper>
          <Logo title="Python" logo={<PythonLogo />} />
          <Logo title="NodeJs" logo={<NodeJsLogo />} />
          <Logo title="Django" logo={<DjangoLogo />} />
          <Logo title="GatsbyJs" logo={<GatsbyLogo />} />
          <Logo title="ReactJs" logo={<ReactLogo />} />
          <Logo title="HTML 5" logo={<Html5Logo />} />
          <Logo title="CSS 3" logo={<Css3Logo />} />
          <Logo title="JavaScript" logo={<JavaScriptLogo />} />
          <Logo title="TypeScript" logo={<TypeScriptLogo />} />
          <Logo title="Sass" logo={<SassLogo />} />
          <Logo title="PostgreSQL" logo={<PostgresqlLogo />} />
          <Logo title="MongoDB" logo={<MongoLogo />} />
          <Logo title="TailwindCss" logo={<TailwindLogo />} />
          <Logo title="Twitter Bootstrap" logo={<BootstrapLogo />} />
          <Logo title="GraphQL" logo={<GraphQlLogo />} />
          <CenteredLogoText>And more...</CenteredLogoText>
        </LogoWrapper>
      </ServiceSection>
      <ServiceSection heading="Tools and Services" icon={faTools}>
        <LogoWrapper>
          <Logo title="GitHub" logo={<GithubLogo />} />
          <Logo title="Netlify" logo={<NetlifyLogo />} />
          <Logo title="Amazon Web Services" logo={<AwsLogo />} />
          <Logo title="CloudFlare" logo={<CloudFlareLogo />} />
          <Logo title="MailChimp" logo={<MailChimpLogo />} />
          <Logo title="Zapier" logo={<ZapierLogo />} />
          <Logo title="Podio" logo={<PodioLogo />} />
          <Logo title="Docker" logo={<DockerLogo />} />
          <Logo title="Contentful" logo={<ContentfulLogo />} />
          <Logo title="Heroku" logo={<HerokuLogo />} />
          <Logo title="Stripe" logo={<StripeLogo />} />
          <CenteredLogoText>And more...</CenteredLogoText>
        </LogoWrapper>
      </ServiceSection>
      <Heading title="Our Projects" />
      <ServiceSection heading="Visions Brought to Life" icon={faCloud}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <WebsitePreview
            fluid={data.engelorumora.childImageSharp.fluid}
            href="https://engelorumora.com"
            label="EngeloRumora.com"
          />
          <WebsitePreview
            fluid={data.therawtruthbook.childImageSharp.fluid}
            href="https://therawtruthbook.com"
            label="The Raw Truth Book"
          />
          <WebsitePreview
            fluid={data.semprefootball.childImageSharp.fluid}
            href="https://semprefootball.com"
            label="Sempre Football"
          />
          <WebsitePreview
            fluid={data.ohiopyle.childImageSharp.fluid}
            href="https://ohiopyle.co"
            label="Ohiopyle Park Information Site"
          />
          <WebsitePreview
            fluid={data.ohiocashflow.childImageSharp.fluid}
            href="https://ohiocashflow.com"
            label="OhioCashFlow"
          />
          <WebsitePreview
            fluid={data.protagonista.childImageSharp.fluid}
            href="https://protagonista.me"
            label="Protagonista"
          />
        </div>
      </ServiceSection>
      <Heading title="Our References" />
      <ServiceSection heading="Satisifed Customers" icon={faUsers}>
        <p>References are available upon request.</p>
        <p className="mt-3">
          <Link className="text-blue-600" to="/contact">
            Contact us
          </Link>{' '}
          for a free consultation, or if you have any questions. We look forward
          to hearing from you!
        </p>
      </ServiceSection>
    </Layout>
  );
};

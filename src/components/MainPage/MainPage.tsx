import React from 'react';

import { Link } from 'gatsby';

import { Layout } from '../Layout';
import { MainBlurb } from '../MainBlurb';
import { SEO } from '../SEO';
import { SocialLinks } from '../SocialLinks';

import { Callout } from './components/Callout';
import { Emphasis } from './styles';

export const MainPage: React.FC = () => (
  <Layout showHeaderImage>
    <SEO title="Home" />
    <MainBlurb
      image="laptop.png"
      header="We are MachineServant."
      subHeader={
        <>
          MachineServant is a <Emphasis>web design</Emphasis> and{' '}
          <Emphasis>development</Emphasis> shop that can take your project from
          start to finish and produce high quality, professional results!
        </>
      }
    ></MainBlurb>
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      <Callout imageName="ohio.png" headerText="Located in Akron Ohio">
        <h3 className="text-lg">
          We love northeast Ohio, but our abilities know no bounds! We can work
          with you remotely any time, any place.
        </h3>
      </Callout>
      <Callout imageName="gears.png" headerText="What we do">
        <h3 className="text-lg">
          We design, build, and manage your web site or web application. Our
          team of experts will work with you one on one to bring your vision to
          reality.
        </h3>
        <br />
        <p className="text-lg">
          Learn more{' '}
          <Link className="text-blue-800" to="/about">
            About Us
          </Link>
          .
        </p>
      </Callout>
      <Callout imageName="contact.png" headerText="Sound good?">
        <h3 className="text-lg">Reach out to us and get a free estimate!</h3>
        <br />
        <Link className="text-2xl text-blue-800" to="/contact">
          Contact Us
        </Link>
        <hr className="my-6" />
        <SocialLinks />
      </Callout>
    </div>
  </Layout>
);

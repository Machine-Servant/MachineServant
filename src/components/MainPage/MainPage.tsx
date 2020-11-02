import React from 'react';

import { Link } from 'gatsby';

import { Layout } from '../Layout';
import { MainBlurb } from '../MainBlurb';
import { SEO } from '../SEO';
import { SocialLinks } from '../SocialLinks';
import { Image } from '../Image';

import { Callout } from './components/Callout';
import { Emphasis, QuoteMark } from './styles';

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
          <Link className="text-blue-600" to="/about">
            About Us
          </Link>
          .
        </p>
      </Callout>
      <Callout imageName="contact.png" headerText="Sound good?">
        <h3 className="text-lg">Reach out to us and get a free estimate!</h3>
        <br />
        <Link className="text-2xl text-blue-600" to="/contact">
          Contact Us
        </Link>
        <hr className="my-6" />
        <SocialLinks />
      </Callout>
    </div>
    <div className="grid mt-10 gird-cols-1">
      <div className="p-8 bg-gray-400 bg-opacity-50 border-gray-500 border-opacity-50 rounded-lg shadow-lg sm:p-12">
        <blockquote className="relative p-4 italic text-gray-800 bg-gray-100 bg-opacity-50 border-l-4 border-gray-500 rounded-lg quote">
          <QuoteMark>&ldquo;</QuoteMark>
          <p className="mb-4 text-lg">
            After countless individuals and companies along with hundreds of
            thousands of dollars in losses, we have finally found a company that
            we trust. Machine Servant is affordable, efficient and they
            definitely know their stuff. Led by Evan who is not only a true
            professional but through our working relationship has also become a
            friend. I highly recommend taking them on for any project that you
            have in mind.
          </p>
          <cite className="flex items-center">
            <Image
              className="w-12 mr-4 bg-gray-500 rounded-full"
              name="EngeloRumora.jpeg"
              alt="Engelo Rumora"
            />
            <div className="flex flex-col items-start">
              <span className="mb-1 text-sm italic font-bold">
                Engelo Rumora
              </span>
              <a
                className="text-sm"
                href="https://engelorumora.com"
                rel="noreferrer noopener"
                target="_blank"
              >
                OhioCashFlow
              </a>
            </div>
          </cite>
        </blockquote>
      </div>
    </div>
  </Layout>
);

import React from 'react';

import { Pagination } from '@bit/machineservant.ms-components.pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import { FluidObject } from 'gatsby-image';

import { Layout } from '../Layout';
import { MainBlurb } from '../MainBlurb';
import { Posts } from '../Posts';
import { SEO } from '../SEO';

import { TagList } from './components/TagList';

interface IEdges {
  node: {
    fields: {
      slug: string;
    };
    frontmatter: {
      date: string;
      title: string;
      tags: string[];
      featuredImage: {
        childImageSharp: {
          fluid: FluidObject;
        };
      };
    };
    excerpt: string;
  };
}

interface IBlogPostList {
  data: {
    allMarkdownRemark: {
      edges: IEdges[];
    };
  };
  pageContext: {
    limit: number;
    numPages: number;
    currentPage: number;
    totalCount: number;
  };
}

export const BlogPostList: React.FC<IBlogPostList> = ({
  data,
  pageContext,
}) => {
  const posts = data.allMarkdownRemark.edges;
  const { limit, numPages, currentPage, totalCount } = pageContext;

  return (
    <Layout>
      <SEO
        title="Blog"
        description="News from MachineServant and technical musings."
      />
      <MainBlurb
        image="gears-transparent.png"
        header="Blog"
        subHeader="News from MachineServant and technical musings."
      />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="col-span-3 lg:col-span-2">
          <Posts posts={posts} />
          <Pagination
            numPages={numPages}
            totalCount={totalCount}
            currentIndex={currentPage}
            itemsPerPage={limit}
            basePath="/blog"
            size="xl"
            showDetails
            buttonTextClassNames="text-gray-800 hover:text-gray-700"
          />
        </div>
        <div className="col-span-3 px-4 lg:col-span-1 lg:px-0">
          <h3 className="px-4 mb-4 text-3xl font-bold">
            <FontAwesomeIcon icon={faTags} /> Tags
          </h3>
          <TagList />
        </div>
      </div>
    </Layout>
  );
};

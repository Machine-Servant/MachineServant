import React from 'react';

import { Link } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';

import { Tag } from '../Tag';

import { BlogPostPreview } from './styles';

interface IEdges {
  node: {
    fields: {
      slug: string;
    };
    frontmatter: {
      date: string;
      title: string;
      tags?: string[];
      featuredImage: {
        childImageSharp: {
          fluid: FluidObject;
        };
      };
    };
    excerpt: string;
  };
}

interface IPosts {
  posts: IEdges[];
}

export const Posts: React.FC<IPosts> = ({ posts }) => {
  return (
    <>
      {posts.map(({ node }) => {
        const { excerpt } = node;
        const { date, title, featuredImage, tags } = node.frontmatter;
        const { slug } = node.fields;

        return (
          <BlogPostPreview key={slug}>
            <Link to={`/blog${slug}`}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
                <div className="col-span-4 sm:col-span-1">
                  <div className="w-64 mx-auto mb-6 sm:w-auto">
                    <Img fluid={featuredImage.childImageSharp.fluid} />
                  </div>
                </div>
                <div className="col-span-4 align-middle sm:col-span-3">
                  <div className="flex items-center w-full h-full px-4 -mt-2">
                    <div className="mb-6">
                      <h2 className="text-2xl font-bold text-gray-800">
                        {title}
                      </h2>
                      <p className="mb-2 text-sm text-gray-600">{date}</p>
                      <p className="text-lg text-gray-700">{excerpt}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <div>
              {tags &&
                tags.map((tag) => {
                  return <Tag key={tag} value={tag} />;
                })}
            </div>
          </BlogPostPreview>
        );
      })}
    </>
  );
};

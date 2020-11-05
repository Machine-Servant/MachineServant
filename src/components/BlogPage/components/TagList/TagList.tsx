import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';

import { Tag } from '../../../Tag';

interface ITagGroup {
  tag: string;
  totalCount: number;
}

interface ITags {
  allMarkdownRemark: {
    group: ITagGroup[];
  };
}

export const TagList: React.FC = () => {
  const data: ITags = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { frontmatter: { published: { eq: true } } }) {
        group(field: frontmatter___tags) {
          tag: fieldValue
          totalCount
        }
      }
    }
  `);

  return (
    <div className="flex flex-wrap items-center justify-start">
      {data.allMarkdownRemark.group
        .sort((a, b) => b.totalCount - a.totalCount)
        .map(group => {
          return (
            <Tag
              key={group.tag}
              value={group.tag}
              detail={`(${group.totalCount})`}
            />
          );
        })}
    </div>
  );
};

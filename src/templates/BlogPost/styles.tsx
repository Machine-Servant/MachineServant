import styled from '@emotion/styled';
import tw from 'twin.macro';

export const BlogPostContainer = styled.div`
  ${tw`text-xl text-gray-800`};

  font-family: 'Inter', sans-serif;
`;

export const BlogPostContent = styled.div`
  ${tw`py-4 bg-white bg-opacity-75 rounded shadow`};
`;

export const InnerContent = styled.div`
  ${tw`px-4 mb-2 sm:px-6`}
`;

export const Pre = styled.pre`
  ${tw`p-4 overflow-x-scroll border border-gray-400 shadow-lg`};

  .gatsby-highlight-code-line {
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 0.75em;
    border-left: 0.25em solid #f99;

    ${tw`bg-gray-700`}
  }
`;

export const Header1 = styled.h1`
  ${tw`mb-6 text-4xl font-bold text-center underline`};
`;

export const Header2 = styled.h2`
  ${tw`mb-6 text-3xl font-bold`};
`;

export const Header3 = styled.h3`
  ${tw`mb-4 text-2xl font-bold`};
`;

export const Header4 = styled.h4`
  ${tw`mb-4 text-xl font-bold`};
`;

export const Header5 = styled.h5`
  ${tw`mb-4 text-lg font-bold`};
`;

export const Header6 = styled.h6`
  ${tw`mb-4 font-bold`};
`;

export const Paragraph = styled.p`
  ${tw`my-4 leading-relaxed`};
`;

export const UnorderedList = styled.ul`
  ${tw`pl-5 mb-4 list-disc`}

  > li {
    ${tw`mb-4`}
  }
`;

export const OrderedList = styled.ol`
  ${tw`pl-5 mb-4 list-decimal`}

  > li {
    ${tw`mb-4`}
  }
`;

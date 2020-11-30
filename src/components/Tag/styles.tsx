import styled from '@emotion/styled';
import tw from 'twin.macro';

export const Label = styled.label`
  ${tw`inline-block px-4 py-2 mx-2 mb-4 text-sm font-bold text-gray-700 bg-gray-300 border border-gray-400 rounded cursor-pointer whitespace-nowrap hover:bg-gray-300 hover:text-gray-600`};
`;

export const Detail = styled.span`
  ${tw`ml-2 text-gray-600`};
`;

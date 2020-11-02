import styled from '@emotion/styled';
import tw from 'twin.macro';

export const Emphasis = styled.span`
  ${tw`font-bold text-black`};
`;

export const QuoteMark = styled.div`
  ${tw`absolute top-0 hidden mr-2 font-mono leading-none text-gray-600 sm:block`};
  font-size: 5rem;
  right: 100%;
`;

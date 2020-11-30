import styled from '@emotion/styled';
import tw from 'twin.macro';

export const Content = styled.div`
  ${tw`w-full px-4 xl:px-0`}
`;

export const InputGroup = styled.div`
  ${tw`mb-5`};
`;

export const Label = styled.label`
  ${tw`block mb-2 font-bold tracking-wide text-gray-700 uppercase`};
`;

export const Input = styled.input`
  ${tw`block w-full px-4 py-3 leading-tight bg-gray-100 border border-gray-600 rounded-lg appearance-none focus:bg-white focus:outline-none`};
`;

export const TextArea = styled.textarea`
  ${tw`block w-full px-4 py-3 leading-tight bg-gray-100 border border-gray-600 rounded-lg appearance-none focus:bg-white focus:outline-none`};
`;

export const SubmitButton = styled.button`
  ${tw`w-full px-4 py-4 font-bold text-white uppercase bg-blue-500 rounded shadow hover:bg-blue-400 focus:ring`}
`;

export const ContactRow = styled.div`
  ${tw`flex justify-around w-full mb-6 text-center`};
`;

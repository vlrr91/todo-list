import styled from 'styled-components';

const Content = styled.div`
  display: flex;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  height: ${({ theme }) => theme.dimensions.d40};
`;

export { Content, Input };

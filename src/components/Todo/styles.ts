import styled from 'styled-components';

const Content = styled.section`
  margin: 0 auto;

  ${({ theme }) => `
    padding: ${theme.spacing.s32};
    max-width: ${theme.dimensions.maxW600};
  `}
`;

export { Content };

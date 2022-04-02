import styled from 'styled-components';
import { VariantButton } from '../../models/UI/Button';

const StyledButton = styled.button<{ variant: VariantButton }>`
  display: block;
  cursor: pointer;
  color: white;
  border: none;

  ${({ theme }) => `
    height: ${theme.dimensions.d40};
    padding: ${theme.spacing.s8} ${theme.spacing.s16};
  `}

  ${({ theme, variant }) =>
    variant === 'primary' &&
    `
    background-color: ${theme.colors.primaryColor};
  `}

  ${({ theme, variant }) =>
    variant === 'accent' &&
    `
    background-color: ${theme.colors.accentColor};
  `}
`;

export { StyledButton };

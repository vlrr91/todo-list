import styled from 'styled-components';

const Container = styled.div`
  ${({ theme }) =>
    `
    border-bottom: 2px solid ${theme.colors.primaryColor};
    background-color: ${theme.colors.white};
  `}
`;

const List = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
  display: flex;
  justify-content: center;
`;

const Item = styled.li<{ selected: boolean }>`
  ${({ theme }) =>
    `
    cursor: pointer;
    text-transform: uppercase;
    background-color: ${theme.colors.primaryColor};
    color: ${theme.colors.white};
    padding: ${`${theme.spacing.s8} ${theme.spacing.s16}`};
    margin: ${theme.spacing.s16};
  `}

  ${({ theme, selected }) =>
    selected &&
    `  
    &::after {
      content: '';
      display: block;
      height: 3px;
      margin-top: 2px;
      background-color: ${theme.colors.accentColor};
      border-radius: 3px;
    }
  `}
`;

export { Container, List, Item };

import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ theme }) => `
    height: ${theme.dimensions.d40};
    margin: ${theme.spacing.s16} 0;
  `}
`;

const Label = styled.label`
  flex: 1;
  margin-left: ${({ theme }) => theme.spacing.s8};
`;

const Input = styled.input`
  margin-bottom: 0;
  accent-color: ${({ theme }) => theme.colors.primaryColor};
`;

const DeleteButton = styled.button`
  border: none;
  cursor: pointer;

  ${({ theme }) => `
    background-color: ${theme.colors.accentColor};
    color: ${theme.colors.white};
    height: ${theme.dimensions.d40};
    width: ${theme.dimensions.d40};
  `}
`;

export { List, Item, Label, Input, DeleteButton };

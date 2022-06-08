import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.spacings.medium};
  margin: auto ${({ theme }) => theme.spacings.small};
`;

export const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.tertiary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.spacings.extraSmall};
  width: 100%;
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacings.extraSmall}
    ${({ theme }) => theme.spacings.small};
`;

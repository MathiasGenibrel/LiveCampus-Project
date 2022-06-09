import styled from "styled-components";

export const Section = styled.section`
  width: calc(100% - ${({ theme }) => theme.spacings.extraLarge});
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.spacings.medium};
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fonts.sizes.large};
  margin: ${({ theme }) => theme.spacings.large} 0
    ${({ theme }) => theme.spacings.medium};
`;

export const Text = styled.p`
  margin-bottom: ${({ theme }) => theme.spacings.extraSmall};
`;

export const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.tertiary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radius.small};
  width: 100%;
  color: ${({ theme }) => theme.colors.primary};
  /* prettier-ignore */
  padding: ${({ theme }) => theme.spacings.extraSmall} ${({ theme }) =>
    theme.spacings.small};
`;

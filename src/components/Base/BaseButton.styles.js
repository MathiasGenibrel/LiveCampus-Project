import styled from "styled-components";

export const Primary = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.tertiary};
  border: none;
  min-width: fit-content;
  width: 100%;
  max-width: 350px;
  /* prettier-ignore */
  padding: ${({ theme }) => theme.spacings.extraSmall} ${({ theme }) =>
    theme.spacings.large};
  border-radius: ${({ theme }) => theme.radius.small};
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
  margin: 0 auto;
`;

export const Secondary = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Tertiary = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
`;

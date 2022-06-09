import styled from "styled-components";
import { Link } from "react-router-dom";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: ${({ theme }) => theme.spacings.large};
  height: 100vh;
  padding-bottom: ${({ theme }) => theme.spacings.extraExtraLarge};
`;

export const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Indication = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.small};
`;

export const RouterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
`;

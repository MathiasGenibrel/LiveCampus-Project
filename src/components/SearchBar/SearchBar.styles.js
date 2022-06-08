import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.tertiary};
  font-size: 1.5rem;
`;

export const Input = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.tertiary};
  &::placeholder {
    color: ${({ theme }) => theme.colors.tertiary};
    opacity: 0.65;
  }
`;

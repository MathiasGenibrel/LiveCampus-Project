import React from "react";
import styled from "styled-components";

import * as Line from "../../styles/animations/HamburgerMenu.animation";

const Div = styled.div`
  width: calc(${({ theme }) => theme.spacings.medium} * 2);
  height: ${({ theme }) => theme.spacings.medium};
  position: relative;
  transform: rotate(0deg);
  transition: 0.25s ease-in-out;
  cursor: pointer;
`;

const Span = styled.span`
  position: absolute;
  height: 3px;
  width: 100%;
  background: ${({ theme }) => theme.colors.tertiary};
  border-radius: ${({ theme }) => theme.radius.small};
  opacity: 1;
  transition: 0.2s linear;
  &:nth-child(1) {
    animation: ${(props) => (props.isOpen ? Line.top : Line.reverseTop)} 500ms
      forwards;
    top: 0;
    margin: auto 0;
  }
  &:nth-child(2) {
    animation: ${(props) => (props.isOpen ? Line.middle : Line.reverseMiddle)}
      500ms forwards;
    top: 0;
    bottom: 0;
    margin: auto 0;
  }
  &:nth-child(3) {
    top: 100%;
    bottom: 0;
    margin: auto 0;
    animation: ${(props) => (props.isOpen ? Line.bottom : Line.reverseBottom)}
      500ms forwards;
  }
`;

export const HamburgerMenu = ({ state }) => {
  const clickHandler = () => {
    state.setIsOpen((open) => !open);
  };

  return (
    <Div onClick={clickHandler}>
      <Span isOpen={state.isOpen}></Span>
      <Span isOpen={state.isOpen}></Span>
      <Span isOpen={state.isOpen}></Span>
    </Div>
  );
};

import { keyframes } from "styled-components";

export const top = keyframes`
  0% {
    top: 0;
    bottom: 100%;
    margin: auto 0;
  }
  50% {
    bottom: 0;
    transform: rotate(0deg);
  }
  100% {
    bottom: 0;
    transform: rotate(45deg);
  }
`;

export const reverseTop = keyframes`
  0% {
    bottom: 0;
    transform: rotate(45deg);
  }
  50% {
    bottom: 0;
    transform: rotate(0deg);
  }
  100% {
    top: 0;
    bottom: 100%;
    margin: auto 0;
  }
`;

export const middle = keyframes`
  0% {
    opacity: 1;
  }
  40%{
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

export const reverseMiddle = keyframes`
  0% {
    opacity: 0;
  }
  40%{
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
`;

export const bottom = keyframes`
  0% {
    bottom: 0;
    top: 100%;
    margin: auto 0;
  }
  50% {
    transform: rotate(0deg);
    top: 0;
  }
  100% {
    top: 0;
    transform: rotate(-45deg);
  }
`;

export const reverseBottom = keyframes`
  0% {
    top: 0;
    transform: rotate(-45deg);
  }
  50% {
    transform: rotate(0deg);
    top: 0;
  }
  100% {
    bottom: 0;
    top: 100%;
    margin: auto 0;
  }
`;

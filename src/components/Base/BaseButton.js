import React from "react";

import * as Styled from "./BaseButton.styles";

export const BaseButton = ({
  text,
  onClick: handleClick,
  version = "primary",
}) => {
  const Button =
    version === "primary" ? (
      <Styled.Primary onClick={handleClick}>{text}</Styled.Primary>
    ) : version === "secondary" ? (
      <Styled.Secondary onClick={handleClick}>{text}</Styled.Secondary>
    ) : (
      <Styled.Tertiary onClick={handleClick}>{text}</Styled.Tertiary>
    );
  return Button;
};

import React from "react";

export const BaseButton = ({ text, onClick: handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

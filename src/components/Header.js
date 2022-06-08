import React, { useState } from "react";

// Import components
import { SearchBar } from "./SearchBar/SearchBar";
import { HamburgerMenu } from "./header/HamburgerMenu";

// Import styles
import * as Styled from "../styles/Header";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Styled.Header>
      <HamburgerMenu state={{ isOpen, setIsOpen }} />
      <SearchBar />
    </Styled.Header>
  );
};

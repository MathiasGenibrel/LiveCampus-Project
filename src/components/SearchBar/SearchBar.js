import React from "react";

import { SearchIcon } from "../../assets/Search.icon";

import * as Styled from "./SearchBar.styles";

export const SearchBar = () => {
  return (
    <Styled.Section>
      <Styled.Input type="text" placeholder="Search Your Photos" />
      <SearchIcon />
    </Styled.Section>
  );
};

import React from "react";
import styled from "styled-components";
import punkLogo from "../assets/cryptopunk-logo.png";
import searchIcon from "../assets/search.png";

function Header() {
  return (
    <Container>
      <HeaderLogo>
        <img src={punkLogo} alt="Punk Logo Image" />
      </HeaderLogo>
      <SearchBar>
        <SearchIcon>
          <img src={searchIcon} alt="Search Icon" />
        </SearchIcon>
        <SearchInput type="text" placeholder="Collection, item or user..." />
      </SearchBar>
    </Container>
  );
}

const Container = styled.div`
  height: 100px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
`;

const HeaderLogo = styled.div`
  img {
    width: 200px;
  }
`;
const SearchBar = styled.div`
  background-color: #1c1c1e;
  height: 50px;
  flex: 1;
  display: flex;
  border-radius: 50px;
  align-items: center;
  margin: 10px;
`;

const SearchIcon = styled.div`
  margin: 10px;
`;

const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  width: 100%;
  outline: none;
`;
export default Header;

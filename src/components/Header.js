import React from "react";
import styled from "styled-components";
import punkLogo from "../assets/cryptopunk-logo.png";
import searchIcon from "../assets/search.png";
import themeSwitchIcon from "../assets/theme-switch.png";

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
      <HeaderContent>
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </HeaderContent>
      <HeaderActions>
        <ThemeSwitchContainer>
          <img src={themeSwitchIcon} alt="Theme Switch Icon" />
        </ThemeSwitchContainer>
      </HeaderActions>
      <LoginButton>GET IN</LoginButton>
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
  color: #eee;
  font-size: 16px;
`;

const HeaderContent = styled.div`
  display: flex;
  color: #a1a5b0;
  p {
    margin: 10px;
  }
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;

  div {
    margin: 10px;
  }
`;

const ThemeSwitchContainer = styled.div`
  display: flex;
  background-color: #1c1c1e;
  border-radius: 50px;
  padding: 15px;
  justify-content: center;
  align-items: center;
  object-fit: contain;

  img {
    height: 25px;
  }
`;

const LoginButton = styled.div`
  background: linear-gradient(to right, #59f9b7, #66feea);
  padding: 15px 40px;
  border-radius: 50px;
  color: black;
`;
export default Header;

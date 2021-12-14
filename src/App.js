import { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import PunkList from "./components/PunkList";
import Main from "./components/Main";
import axios from "axios";

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const getNFTs = async () => {
      const openSeaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0x87c5339DD9fcF1307A1A942aE47C94d2026C72f3&order_direction=asc"
      );
      console.log(openSeaData.data.assets);
      setPunkListData(openSeaData.data.assets);
    };
    return getNFTs();
  }, []);

  const lightTheme = {
    pageBackgroundColor: "#fff",
    backgroundColorSearchBar: "#f3f6f9",
    backgroundThemeSwitchIcon: "#f3f6f9",
    punkNameTextColor: "#1c1c1e",
    instaBackgroundColor: "#1c1c1e",
    mainBorderBottom: "1px solid #1a1c1e",
    collectionCardBackground: "#f3f6f9",
    collectionNameColor: "#1c1c1e",
  };

  const darkTheme = {
    pageBackgroundColor: "#000",
    backgroundColorSearchBar: "#1c1c1e",
    backgroundThemeSwitchIcon: "#1c1c1e",
    punkNameTextColor: "#fff",
    instaBackgroundColor: "transparent",
    mainBorderBottom: "1px solid #fff",
    collectionCardBackground: "#1a1c1e",
    collectionNameColor: "#fff",
  };

  const themes = {
    light: lightTheme,
    dark: darkTheme,
  };

  return (
    <ThemeProvider theme={themes[theme]}>
      <Container>
        <Header theme={theme} setTheme={setTheme} />
        {punkListData.length > 0 && (
          <>
            <Main
              selectedPunk={selectedPunk}
              punkListData={punkListData}
              theme={theme}
              setTheme={setTheme}
            />
            <PunkList
              punkListData={punkListData}
              setSelectedPunk={setSelectedPunk}
              theme={theme}
              setTheme={setTheme}
            />
          </>
        )}
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  margin: 0;
  padding: 20px;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.pageBackgroundColor};
  min-height: 100vh;
  max-width: 100vw;
  transition: all 0.5s ease;
`;

export default App;

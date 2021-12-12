import { useState, useEffect } from "react";
import styled from "styled-components";
import CollectionCard from "./components/CollectionCard";
import Header from "./components/Header";
import PunkList from "./components/PunkList";
import Main from "./components/Main";
import axios from "axios";

function App() {
  const [punkListData, setPunkListData] = useState([]);

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

  return (
    <Container>
      <Header />
      <Main />
      <PunkList punkListData={punkListData} />
    </Container>
  );
}

const Container = styled.div`
  margin: 0;
  padding: 20px;
  box-sizing: border-box;
  background-color: #000;
  min-height: 100vh;
  max-width: 100vw;
`;

export default App;

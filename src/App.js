import { useState, useEffect } from "react";
import styled from "styled-components";
import CollectionCard from "./components/CollectionCard";
import Header from "./components/Header";

function App() {
  return (
    <Container>
      <Header />
      <CollectionCard
        id={0}
        name={"Bandana Punk"}
        traits={[{ value: 7 }]}
        image="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE.jpg"
      />
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

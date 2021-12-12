import { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./components/Header";

function App() {
  return (
    <Container>
      <Header />
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

import React from "react";
import styled from "styled-components";

function Main() {
  return (
    <Container>
      <MainContent>
        <PunkHighlight>
          <PunkContainer>
            <img
              src="https://static01.nyt.com/images/2021/03/12/arts/11nft-auction-cryptopunks-print/11nft-auction-cryptopunks-print-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
              alt="Selected punk"
            />
          </PunkContainer>
        </PunkHighlight>
        <PunkDetails style={{ color: "#fff" }}>
          <Title>"Justin punk"</Title>
          <ItemNumber>Item</ItemNumber>
        </PunkDetails>
      </MainContent>
    </Container>
  );
}

const Container = styled.div``;

const MainContent = styled.div``;

const PunkHighlight = styled.div``;

const PunkContainer = styled.div``;

const PunkDetails = styled.div``;

const Title = styled.div``;

const ItemNumber = styled.div``;
export default Main;

import React from "react";
import styled from "styled-components";
import instagramLogo from "../assets/instagram.png";
import gitHubLogo from "../assets/gitHublogo.png";

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
          <ItemNumber>#Item</ItemNumber>
        </PunkDetails>
        <Owner>
          <OwnerImageContainer>
            <img src="" alt="" />
          </OwnerImageContainer>
          <OwnerDetails>
            <OwnerNameAndHandle>
              <OwnerAddress>
                0x87c5339DD9fcF1307A1A942aE47C94d2026C72f3
              </OwnerAddress>
              <OwnerHandle>@Bait</OwnerHandle>
              <OwnerLink>
                <img src={instagramLogo} alt="Instagram Logo" />
              </OwnerLink>
              <OwnerLink>
                <img src={gitHubLogo} alt="Github Logo" />
              </OwnerLink>
            </OwnerNameAndHandle>
          </OwnerDetails>
        </Owner>
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

const Owner = styled.div``;

const OwnerImageContainer = styled.div``;

const OwnerDetails = styled.div``;

const OwnerNameAndHandle = styled.div``;

const OwnerAddress = styled.div``;

const OwnerHandle = styled.div``;

const OwnerLink = styled.div``;
export default Main;

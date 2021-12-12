import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import instagramLogo from "../assets/instagram.png";
import gitHubLogo from "../assets/gitHublogo.png";
import me from "../assets/me.jpg";

function Main({ selectedPunk, punkListData }) {
  const [activePunk, setActivePunk] = useState(punkListData[0]);

  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
  }, [punkListData, selectedPunk]);
  return (
    <Container>
      <MainContent>
        <PunkHighlight>
          <PunkContainer>
            <img src={activePunk.image_original_url} alt={activePunk.name} />
          </PunkContainer>
        </PunkHighlight>

        <PunkDetails style={{ color: "#fff" }}>
          <Title>{activePunk.name}</Title>
          <ItemNumber>#{activePunk.token_id}</ItemNumber>
        </PunkDetails>

        <Owner>
          <OwnerImageContainer>
            <img src={me} alt="Image of Aly" />
          </OwnerImageContainer>

          <OwnerDetails>
            <OwnerNameAndHandle>
              <div style={{ color: "#a1a5b0" }}>{activePunk.owner.address}</div>
              <OwnerHandle style={{ color: "#a1a5b0" }}>@Bait</OwnerHandle>
            </OwnerNameAndHandle>

            <OwnerLink>
              <img src={instagramLogo} alt="Instagram Logo" />
            </OwnerLink>
            <OwnerLink>
              <img
                src={gitHubLogo}
                alt="Github Logo"
                style={{
                  backgroundColor: "white",
                  padding: "8px",
                  borderRadius: "5px",
                }}
              />
            </OwnerLink>
          </OwnerDetails>
        </Owner>
      </MainContent>
    </Container>
  );
}

const Container = styled.div`
  max-height: 50vh;
`;

const MainContent = styled.div`
  display: flex;
  padding-bottom: 20px;
  border-bottom: 1px solid #fff;
`;

const PunkHighlight = styled.div`
  flex: 0.25;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PunkContainer = styled.div`
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  margin-right: 20px;

  img {
    object-fit: contain;
    max-width: min(30vw, 40vh);
    max-height: 30vw;
  }
`;

const PunkDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 0.75;
`;

const Title = styled.div`
  font-size: 96px;
  font-weight: 800;
`;

const ItemNumber = styled.div`
  color: #a1a5b0;
  font-size: 72px;
  align-self: center;
`;

const Owner = styled.div`
  display: flex;
  margin: 10px 0;
  height: 50px;

  div {
    margin: 0 5px;
  }
`;

const OwnerImageContainer = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border-radius: 50px;
  overflow: hidden;
  object-fit: contain;

  img {
    height: 100%;
    width: 100%;
  }
`;

const OwnerDetails = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

const OwnerNameAndHandle = styled.div`
  flex: 1;
`;

const OwnerHandle = styled.div`
  color: #00ebe;
`;

const OwnerLink = styled.div`
  padding: 12px;
  border-radius: 50px;
  height: 50px;
  width: 50px;
  border: 1px solid #fff;
  margin: 0 0 0 10px;

  img {
    height: 100%;
    width: 100%;
  }

  :last-child {
    border: none;
  }
`;
export default Main;

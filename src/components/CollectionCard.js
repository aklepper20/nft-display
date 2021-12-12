import React from "react";
import styled from "styled-components";
import weth from "../assets/weth.png";

function CollectionCard({ id, name, traits, image }) {
  return (
    <Container>
      <img src={image} alt="Punk Image" />
      <Details>
        <Name>{name}</Name>
        <Id>#{id}</Id>

        <PriceContainer>
          <img src={weth} alt="Eth Image" />
          <Price>{traits[0]?.value}</Price>
        </PriceContainer>
      </Details>
    </Container>
  );
}

const Container = styled.div`
  color: white;
  background-color: #1a1c1e;
  border-radius: 20px;
  overflow: hidden;
  width: 300px;
  height: 500px;
  margin-right: 30px;

  img {
    width: 100%;
  }
`;
const Details = styled.div`
  padding: 20px;
`;
const Name = styled.div`
  font-size: 20px;
  font-weight: 900;
`;
const Id = styled.div`
  color: #a1a5b0;
  font-size: 18px;
  font-weight: 600;
`;
const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  object-fit: contain;
  img {
    height: 23px;
    width: 15px;
  }
`;
const Price = styled.div`
  margin-left: 5px;
  font-weight: 600;
`;
export default CollectionCard;
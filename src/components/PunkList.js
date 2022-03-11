import React from "react";
import styled from "styled-components";
import CollectionCard from "./CollectionCard";

function PunkList({ punkListData, setSelectedPunk }) {
  return (
    <Container>
      {punkListData?.map((punk) => (
        <div onClick={() => setSelectedPunk(punk.token_id)}>
          <CollectionCard
            key={punk.token_id}
            id={punk.token_id}
            name={punk.name}
            traits={punk.traits}
            image={punk.image_original_url}
          />
        </div>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  cursor: pointer;
  overflow: scroll;
  margin-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid white;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export default PunkList;

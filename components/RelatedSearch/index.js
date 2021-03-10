import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
`;
const Heading = styled.h2`
  font-family: "ProximaNova Bold";
  font-size: 36px;
  margin-bottom: 20px;
`;
const ItemContainer = styled.div`
  margin: 20px 0;
`;
const SearchItem = styled.div`
  display: inline-block;
  border: 1px solid #ccc;
  color: #707070;
  padding: 9px 24px;
  margin: 0 auto 10px;
  border-radius: 5px;
  font-size: 13px;
  text-transform: uppercase;
  margin-right: 10px;
  cursor: pointer;
  &:hover{
    background: #e4e4e4;
  }
`;

function RelatedSearch() {
  return (
    <Container>
      <div>
        <Heading>Related Searches</Heading>
        <button className="napBtn napBtn-light ff-pr">SEE ALL SLATWALL ACCESSORIES</button>
      </div>
      <ItemContainer>
        <SearchItem>
          Search Keyword
        </SearchItem>
        <SearchItem>
          Search Keyword
        </SearchItem>
        <SearchItem>
          Search Keyword
        </SearchItem>
        <SearchItem>
          Search Keyword
        </SearchItem>
      </ItemContainer>
    </Container>
  )
}

export default RelatedSearch

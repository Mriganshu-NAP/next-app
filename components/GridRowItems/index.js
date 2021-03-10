import React from 'react';
import styled from 'styled-components';
import { MainHeadingNap1, ItemContainer} from '../CommonComponents';

const Container = styled.section`
  margin-top: 50px;
  text-align: center;
`;

const RowItem = styled.div`
  margin: 15px;
`;
const Image = styled.img`
  width: 100%;
`;
function GridRowItems({heading, items}) {

  return (
    <Container>
        <MainHeadingNap1>{heading}</MainHeadingNap1>
        <ItemContainer>
          {items?.map((item, index) => (
            <RowItem key={index}>
              <Image src={item.src} alt="newage" />
              <p className="nap-fontsize2 design-heading napfonts mobile-fontsize2">{item.itemHeading}</p>
              <p className="nap-fontsize5 napfonts mobile-fontsize5">{item.itemSubHeading}</p>
          </RowItem>
          ))}
        </ItemContainer>
    </Container>
  )
}

export default GridRowItems

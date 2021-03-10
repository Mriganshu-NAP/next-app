import React from 'react';
import styled from 'styled-components';
import flooring from '../../assets/flooring.jpg';

const Container = styled.div`
  margin: 10px;
  display: flex;
  flex-wrap: wrap;
`;
const GridItems = styled.div`
  position: relative;
  margin: 10px;
  flex: 1 1 45%;
`;
const ContentContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  color: #FFF;
  text-align: center;
`;

export const defaultItems = [
  {
    img: flooring,
    caption: <>Explore our full line <br /> of premium Flooring products</>
  },
  {
    img: flooring,
    caption: <>Explore our full line <br /> of premium Flooring products</>
  },
  {
    img: flooring,
    caption: <>Explore our full line <br /> of premium Flooring products</>
  },
  {
    img: flooring,
    caption: <>Explore our full line <br /> of premium Flooring products</>
  }
]

function MultiRowsItems({items}) {
  return (
    <section>
      <Container>
        {items.map((item, index) => 
        <GridItems key={index}>
          <img src={item.img} width="100%" alt="nap" />
          {item.caption && <ContentContainer>
            <p className="nap-fontsize10 fc-white ff-psb showInDesktop">{item.caption} <span className="hover-effect">›</span></p>
          </ContentContainer>}
          {/* <Caption text={item.caption} /> */}
        </GridItems>)}
        {/* <GridItems>
          <img src={flooring} width="100%" alt="nap" />
          <ContentContainer>
            <p className="nap-fontsize10 fc-white ff-psb showInDesktop">Explore our full line <br /> of premium Flooring products <span className="hover-effect">›</span></p>
          </ContentContainer>
        </GridItems>
        <GridItems>
          <img src={flooring} width="100%" alt="nap" />
          <ContentContainer>
            <p className="nap-fontsize10 fc-white ff-psb showInDesktop">Explore our full line <br /> of premium Flooring products <span className="hover-effect">›</span></p>
          </ContentContainer>
        </GridItems>
        <GridItems>
          <img src={flooring} width="100%" alt="nap" />
          <ContentContainer>
            <p className="nap-fontsize10 fc-white ff-psb showInDesktop">Explore our full line <br /> of premium Flooring products <span className="hover-effect">›</span></p>
          </ContentContainer>
        </GridItems> */}
      </Container>
    </section>
  )
}
MultiRowsItems.defaultProps = {
  items: defaultItems
}

export default MultiRowsItems

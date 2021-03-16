import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import {ItemContainer} from '../CommonComponents';

const Container = styled.section`
  text-align: center;
`;
// const ItemContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-wrap: wrap;
// `;
const ProductItem = styled.div`
  position: relative;
  padding: 15px;
`;
const ProductDetails = styled.div`
  margin: 30px 0;
`;
const Price = styled.h6`
  margin: 0;
  font-size: 2vw;
  color: #0072bc;
`;
const Title = styled.h6`
  margin: 10px 0 30px;
  font-size: 1.2vw;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
const SeeMoreProducts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: ${props => props.height}px;
  width: ${props => props.width}px;
  margin: 15px;
  background: #f9f9fa;
`;
const Text = styled.h2`
  margin: 0;
  font-size: 2vw;
`;
const items = [{
  id: 1,
  img: '/assets/hb-door.jpg',
  price: '$299.99',
  title: "Home Bar 2-Door Cabinet - 21",
  link: ''
},{
  id: 2,
  img: '/assets/hb-door.jpg',
  price: '$299.99',
  title: "Home Bar 2-Door Cabinet - 21",
  link: ''
},{
  id: 3,
  img: '/assets/hb-door.jpg',
  price: '$299.99',
  title: "Home Bar 2-Door Cabinet - 21",
  link: ''
},{
  id: 4,
  img: '/assets/hb-door.jpg',
  price: '$299.99',
  title: "Home Bar 2-Door Cabinet - 21",
  link: ''
},{
  id: 5,
  img: '/assets/hb-door.jpg',
  price: '$299.99',
  title: "Home Bar 2-Door Cabinet - 21",
  link: ''
}];

function PIPSection() {
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const imgRef = useRef(null);

  useEffect(() => {
    setHeight(imgRef.current.clientHeight);
    setWidth(imgRef.current.clientWidth);
  }, []);

  return (
    <Container>
      <h3 className="napfonts nap-fontsize1 ff-psb  mobile-fontsize2 title-margin-bottom center-align">Shop Home Bar</h3>
      <h4 className="napfonts nap-fontsize4 mobile-fontsize5 ff-pr center-align">Shop sets or individual cabinets to make your <br />own unique custom configuration.</h4>
      <ItemContainer wrap>
        {items.map(item => (<ProductItem key={item.id}>
          <img ref={imgRef} src={item.img} alt="nap-demo" />
          <ProductDetails>
            <Price>{item.price}</Price>
            <Title>{item.title}</Title>
            <ButtonContainer>
              <button className="napBtn ff-psb">BUY NOW</button>
            </ButtonContainer>
          </ProductDetails>
        </ProductItem>))}
        <SeeMoreProducts width={width} height={height}>
          <Text>See More Products</Text>
          <ButtonContainer>
            <button className="napBtn napBtn-light-blue nap-fontsize7 ff-psb">Shop All Home Bar</button>
          </ButtonContainer>
        </SeeMoreProducts>
      </ItemContainer>
    </Container>
  )
}

export default PIPSection

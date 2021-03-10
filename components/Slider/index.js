import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Container = styled.div`
  position: relative;
  padding: 10px;
`;
const Caption = styled.h3`
  position: absolute;
  width: 90%;
  ${props => props.placement === 'top' ? 'top : 0' : 'bottom: 0'};
  left: 15px;
  color: #EFEFEF;
  font-size: 1.8vw;
  margin: 30px 10px;
  font-weight: 500;
  text-align: ${props => props.align};
`;

const responsive = {
    0: { items: 2 },
    568: { items: 2 },
    767: { items: 3 },
};

export const imageProps = [
  {
    id: 1,
    img: '/assets/sink.jpg',
    caption: 'Kitchen Sinks'
  },
  {
    id: 2,
    img: '/assets/sink.jpg',
    caption: 'Kitchen Sinks'
  },
  {
    id: 3,
    img: '/assets/sink.jpg',
    caption: 'Kitchen Sinks'
  },
  {
    id: 4,
    img: '/assets/sink.jpg',
    caption: 'Kitchen Sinks'
  }
]

const Slider = ({items, align, placement}) => {
  const [sliderItems, setSliderItems] = useState([])
  useEffect(() => {
    const temp = [];
    items.forEach(item => (temp.push(
      <Container>
        <Image src={item.img} width={500} height={400} layout='responsive' alt="demo" />
        {item.caption && 
        <Caption align={align} placement={placement}>{item.caption}</Caption>}
      </Container>)));
    setSliderItems(temp);
  }, []);
  return(
  <AliceCarousel
    autoPlayInterval={1000}
    disableButtonsControls={true}
    disableDotsControls={true}
    autoPlay={true}
    infinite={true}
    mouseTracking={true}
    touchMoveDefaultEvents={false}
    items={sliderItems}
    responsive={responsive}
  />)
}
Slider.defaultProps = {
  items: imageProps,
  align: 'left',
  placement: 'top'
}
export default Slider;
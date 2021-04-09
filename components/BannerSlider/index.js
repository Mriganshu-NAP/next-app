import React, {useState, useEffect, useRef} from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import BannerContent from '../BannerContent';

const Container = styled.div`
  position: relative;
`;

export const imageProps = [
  {
    img: '/assets/slider.jpg',
    heading: "Just a simple heading",
    subHeading: "Another simple sub heading",
    buttons: ["Buy Now"],
    height: 600,
    width: 1500
  },
  {
    img: '/assets/slider.jpg',
    heading: "Just a simple heading",
    subHeading: "Another simple sub heading",
    buttons: ["Buy Now"],
    height: 600,
    width: 1500
  },
  {
    img: '/assets/slider.jpg',
    heading: "Just a simple heading",
    subHeading: "Another simple sub heading",
    buttons: ["Buy Now"],
    height: 600,
    width: 1500
  },
  {
    img: '/assets/slider.jpg',
    heading: "Just a simple heading",
    subHeading: "Another simple sub heading",
    buttons: ["Buy Now"],
    height: 600,
    width: 1500
  }
]

const BannerSlider = ({dots, arrows, arrowsColor, items, activeSlide}) => {
  const [bannerItems, setBannerItems] = useState([]);
  const sliderRef = useRef(null)
 
  useEffect(() => {
    const temp = [];
    items.forEach(item => (temp.push(
      <Container>
        <Image src={item.img} height={item.height} width={item.width} layout='responsive' alt="demo" />
        {item.heading && 
          <BannerContent
            heading={item.heading}
            subHeading={item.subHeading}
            align={item.align}
            custom={item.custom}
            buttons={item.buttons}
            contentColor={item.contentColor}
            alignContent={item.alignContent}
          />
        }
      </Container>)));
    setBannerItems(temp);
  }, []);

  return(
    <AliceCarousel
      activeIndex={activeSlide && activeSlide - 1}
      disableDotsControls={!dots}
      disableButtonsControls={!arrows}
      infinite={true}
      mouseTracking={true}
      touchMoveDefaultEvents={false}
      items={bannerItems}
      ref={sliderRef}
    />
  );
}

BannerSlider.defaultProps = {
  dots: false,
  arrows: false,
  arrowsColor: 'black',
  items: imageProps,
  handleSlide: null
}

export default BannerSlider;
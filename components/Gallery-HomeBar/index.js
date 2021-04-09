import React, {useState} from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Modal from '@material-ui/core/Modal';
import BannerSlider from '../BannerSlider';

const Container = styled.div`
  width: 100%;
  display: flex;
`;
const RowItems = styled.div`
  text-align: center;
  margin: 0 10px;
`;
const StyledImage = styled(Image)`
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover{
    ${props => props.zoom && `transform: scale(1.1);`}
  }
`;
const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 25px;
  border-top-left-radius: 0;
  &:not(:first-child){
    margin-top: 15px;
  }
`;
const CaptionContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #000000c7;
`;
const Text = styled.p`
  margin: 25px 0;
  color: #fff;
`;
const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  &:focus{
    outline: none;
  }
`;

export const rows = [
  [
    {
      id: 1,
      img: '/assets/bar-collage/clg-1.png',
      title: 'Bikes and Sports Equipment',
      cover: '50%',
      height: 808,
      width: 738
    },
    {
      id: 2,
      img: '/assets/bar-collage/clg-2.png',
      title: 'Bikes and Sports Equipment',
      cover: '50%',
      height: 1014,
      width: 738
    }
  ],
  [
    {
      id: 3,
      img: '/assets/bar-collage/clg-3.png',
      title: 'Small Tool Storage',
      cover: '20%',
      height: 419,
      width: 524
    },
    {
      id: 4,
      img: '/assets/bar-collage/clg-4.png',
      title: 'Golf Bags and Gear',
      cover: '40%',
      height: 783,
      width: 524
    },
    {
      id: 5,
      img: '/assets/bar-collage/clg-5.png',
      title: 'Bikes and Sports Equipment',
      cover: '30%',
      height: 600,
      width: 524
    }
  ],
  [
    {
      id: 6,
      img: '/assets/bar-collage/clg-6.png',
      title: 'Ladders and Bulky Items',
      cover: '40%',
      height: 778,
      width: 738
    },
    {
      id: 7,
      img: '/assets/bar-collage/clg-7.png',
      title: 'Small Item Storage',
      cover: '30%',
      height: 510,
      width: 738
    },
    {
      id: 8,
      img: '/assets/bar-collage/clg-8.png',
      title: 'Bikes and Sports Equipment',
      cover: '30%',
      height: 514,
      width: 738
    }
  ]
]

export const modalItems = [
  {
    id: 1,
    img: '/assets/collage/clg-1.jpg',
    height: 950,
    width: 1920
  },
  {
    id: 2,
    img: '/assets/collage/clg-2.jpg',
    height: 950,
    width: 1920
  },
  {
    id: 3,
    img: '/assets/collage/clg-3.jpg',
    height: 950,
    width: 1920
  },
  {
    id: 4,
    img: '/assets/collage/clg-4.jpg',
    height: 950,
    width: 1920
  },
  {
    id: 5,
    img: '/assets/collage/clg-5.jpg',
    height: 950,
    width: 1920
  }
];

const Caption = (text) => {
  return(
    <CaptionContainer>
      <Text>{text}</Text>
    </CaptionContainer>
  )
}

function GalleryHomeBar({caption, showPopUp, zoomOnHover, items, popUpItems}) {
  const [modal, setModal] = useState(false);
  const [active, setActive] = useState(null);

  const handleClick = id => {
    setActive(id);
    setModal(true);
  }

  return (
    <Container id="gallery">
      {items.map((row, index) => (
        <RowItems key={index} data-scroll data-scroll-speed={index % 2 ? "1" : "-1"} data-scroll-position={"vertical"} data-scroll-target="#gallery">
          {row.map((item) => (
            <ImageContainer key={item.id} height={item.cover} onClick={() => handleClick(item.id)}>
              <StyledImage zoom={zoomOnHover} src={item.img} height={item.height} width={item.width} alt="nap-demo" />
              {caption && Caption(item.title)}
            </ImageContainer>
          ))}
        </RowItems>
      ))}
      {showPopUp && <Modal
        open={modal}
        onClose={() => setModal(false)}
        disableAutoFocus={true}
      >
        <ModalContainer>
          <BannerSlider items={popUpItems} arrows activeSlide={active}  />
        </ModalContainer>
      </Modal>}
    </Container>
  )
}

GalleryHomeBar.defaultProps = {
  caption: false,
  showPopUp: false,
  zoomOnHover: false,
  items: rows,
  popUpItems: modalItems
}

export default GalleryHomeBar;

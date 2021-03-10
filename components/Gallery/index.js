import React, {useState} from 'react';
import styled from 'styled-components';
import Modal from '@material-ui/core/Modal';
import BannerSlider from '../BannerSlider';
import clg1 from '../../assets/clg-1.jpg';
import clg2 from '../../assets/clg-2.jpg';
import clg3 from '../../assets/clg-3.jpg';
import clg4 from '../../assets/clg-4.jpg';
import clg5 from '../../assets/clg-5.jpg';
import lgclg1 from '../../assets/collage/clg-1.jpg';
import lgclg2 from '../../assets/collage/clg-2.jpg';
import lgclg3 from '../../assets/collage/clg-3.jpg';
import lgclg4 from '../../assets/collage/clg-4.jpg';
import lgclg5 from '../../assets/collage/clg-5.jpg';

const Container = styled.div`
  width: 100%;
  display: flex;
`;
const RowItems = styled.div`
  text-align: center;
  margin: 15px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover{
    ${props => props.zoom && `transform: scale(1.1);`}
  }
`;
const ImageContainer = styled.div`
  position: relative;
  margin-top: 30px;
  height: ${props => props.height === '100%' ? `calc( ${props.height} - 10px)` : `calc( ${props.height} - 20px)`};

  overflow: hidden;
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
      img: clg1,
      title: 'Bikes and Sports Equipment',
      height: '100%'
    }
  ],
  [
    {
      id: 2,
      img: clg2,
      title: 'Small Tool Storage',
      height: '40%'
    },
    {
      id: 3,
      img: clg3,
      title: 'Golf Bags and Gear',
      height: '60%'
    }
  ],
  [
    {
      id: 4,
      img: clg4,
      title: 'Ladders and Bulky Items',
      height: '60%'
    },
    {
      id: 5,
      img: clg5,
      title: 'Small Item Storage',
      height: '40%'
    }
  ]
]

export const modalItems = [
  {
    id: 1,
    img: lgclg1
  },
  {
    id: 2,
    img: lgclg2
  },
  {
    id: 3,
    img: lgclg3
  },
  {
    id: 4,
    img: lgclg4
  },
  {
    id: 5,
    img: lgclg5
  }
];

const Caption = (text) => {
  return(
    <CaptionContainer>
      <Text>{text}</Text>
    </CaptionContainer>
  )
}

function Gallery({caption, showPopUp, zoomOnHover, items, popUpItems}) {
  const [modal, setModal] = useState(false);
  const [active, setActive] = useState(null);

  const handleClick = id => {
    setActive(id);
    setModal(true);
  }

  return (
    <Container>
      {items.map((row, index) => (
        <RowItems key={index}>
          {row.map((item) => (
            <ImageContainer key={item.id} height={item.height} onClick={() => handleClick(item.id)}>
              <Image zoom={zoomOnHover} src={item.img} />
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

Gallery.defaultProps = {
  caption: false,
  showPopUp: false,
  zoomOnHover: false,
  items: rows,
  popUpItems: modalItems
}

export default Gallery;

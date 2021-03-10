import React from 'react';
import styled from 'styled-components';
import {MainHeadingNap1, ItemContainer} from '../CommonComponents'
import kitchen from '../../assets/kitchen-ymai.jpg';

const Container = styled.div`
  text-align: center;
`;
const Item = styled.div`
  padding: 0 15px;
`;

const defaultItem = [{
  src: kitchen,
  link: '',
  title: 'Kitchen'
},
{
  src: kitchen,
  link: '',
  title: 'Kitchen'
},
{
  src: kitchen,
  link: '',
  title: 'Kitchen'
},
{
  src: kitchen,
  link: '',
  title: 'Kitchen'
}]

function YMABII({items}) {
  return (
    <Container>
      <MainHeadingNap1>You may also be interested in</MainHeadingNap1>
      <ItemContainer>
        {items.map((item, index) => (
          <Item key={index}>
          <img src={item.src} width="100%" alt="demo" />
          <div className="cta-container">
            <div className="cta-wrapper">
              <a href={item.link} className="ctagap">
                <button className="napBtn napBtn-light-blue napfonts nap-fontsize7  ff-psb  mobile-fontsize5 center-align subtitle-margin-top">
                  {item.title}
                </button>
              </a>
            </div>
          </div>
        </Item>
        ))}
      </ItemContainer>
    </Container>
  )
}

YMABII.defaultProps = {
  items: defaultItem
}

export default YMABII

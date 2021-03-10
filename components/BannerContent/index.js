import React from 'react';
import styled from 'styled-components';
import {MainHeadingNap1, SubHeadingNap4} from '../CommonComponents';
import NAPButton from '../NAPButton';

const ContentContainer = styled.div`
  position: absolute;
  width: auto;
  ${props => props.align === 'top' ? `
    top: 20%;
    left: 50%;
  `:props => props.align === 'top-left' ? `
    top: 20%;
    left: 20%;
  `:props => props.align === 'top-right' ? `
    top: 20%;
    right: 0%;
  `:props => props.align === 'left' ? `
    top: 50%;
    left: 20%;
  `:props => props.align === 'right' ? `
    top: 50%;
    right: 0%;
  `:props.align === 'bottom' ? `
    top: 80%;
    left: 50%;
  `:props => props.align === 'bottom-left' ? `
    bottom: 0%;
    left: 20%;
  `:props => props.align === 'bottom-right' ? `
    bottom: 0%;
    right: 0%;
  `:`
    top: 50%;
    left: 50%;
  `}
  ${props => props.custom && `
    top: ${props.custom.top};
    left: ${props.custom.left};
  `}
  transform: translate(-50%, -50%);
  text-align: ${props => props.alignContent};
  color: ${props => props.contentColor};
`;
const Heading = styled.h1`
  font-size: 2.9vw;
  color: inherit;
  margin: 0;
`;
const Subheading = styled.h1`
  font-size: 1.6vw;
  color: inherit;
  margin: 20px 0;
  font-weight: 500;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: ${props => props.align === 'right' ? 'flex-end' : props => props.align === 'left' ? 'flex-start' : 'center'};
`;

function BannerContent({align, custom, heading, subHeading, buttons, contentColor, alignContent}) {
  return (
    <ContentContainer align={align} custom={custom} contentColor={contentColor} alignContent={alignContent}>
      <MainHeadingNap1>{heading}</MainHeadingNap1>
      <SubHeadingNap4>{subHeading}</SubHeadingNap4>
      {buttons?.length ? 
      <ButtonContainer align={alignContent}>
        {buttons?.map((item, index) => (
          <NAPButton key={index} text={item} />
        ))}
      </ButtonContainer> : null}
    </ContentContainer>
  )
}

BannerContent.defaultProps = {
  heading: 'Slatwall Accessories',
  subHeading: 'Accessories as unique as your storage needs.',
  contentColor: '#fff',
  alignContent: 'center'
}

export default BannerContent

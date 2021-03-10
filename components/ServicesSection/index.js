import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  background: #000;
  color: #fff;
  margin: 0 20px;
  text-align: center;
  padding: 70px 0;
`;
const Heading = styled.h3`
  margin: 0;
  font-size: 2.9vw;
`;
const FeatureContainer = styled.div`
  display: flex;
  margin: 0 20px;
`;
const FeatureItem = styled.div`
  flex: 1;
  margin: 0 2%;
`;

function ServicesSection() {
  return (
    <Container>
        <Heading>We can help you <br className="showInMobile" /> plan and <br className="showInMobile" /> install your <br className="showInMobile" /> Slatwall System.</Heading>
        <FeatureContainer>
          <FeatureItem>
            <p className="napfonts nap-fontsize10 light-text showInDesktop">Installation</p>
            <p className="nap-fontsize5 feature-info showInDesktop">Step-by-step space measuring <br/> instructions to help you plan <br/> your setup.</p>
            <div className="cta-wrapper">
              <button className="napBtn napBtn-light ff-pr">BEFORE YOU BUY HELP</button>
            </div>
          </FeatureItem>
          <FeatureItem>
            <p className="nap-fontsize10 light-text showInDesktop">Design Services</p>
            <p className="nap-fontsize5 feature-info showInDesktop">Let our Garage Design <br/> Experts help construct the <br/> perfect bar for your needs.</p>
            <div className="cta-wrapper">
              <button className="napBtn napBtn-light ff-pr">BOOK DESIGN CONSULATION</button>
            </div>
          </FeatureItem>
          <FeatureItem>
            <p className="nap-fontsize10 light-text showInDesktop">White Glove</p>
            <p className="nap-fontsize5 feature-info showInDesktop">Garage delivery made even <br/> easier, with room of choice drop <br/> off and unboxing.</p>
            <div className="cta-wrapper">
              <button className="napBtn napBtn-light ff-pr">WHITE GLOVE DELIVERY</button>
            </div>
          </FeatureItem>
          <FeatureItem>
            <p className="nap-fontsize10 light-text showInDesktop">DIY Support</p>
            <p className="nap-fontsize5 feature-info showInDesktop">Find the DIY support you need, <br/> with videos, installation guides <br/> and advise from product experts.</p>
            <div className="cta-wrapper">
              <button className="napBtn napBtn-light ff-pr">GO TO SUPPORT HUB</button>
            </div>
          </FeatureItem>
        </FeatureContainer>
      </Container>
  )
}

export default ServicesSection;
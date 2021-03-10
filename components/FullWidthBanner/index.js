import Image from 'next/image';
import styled from 'styled-components';
import BannerContent from '../BannerContent';

const Container = styled.section`
  position: relative;
`;


function FullWidthBanner({isVideo, src, align, heading, subHeading, buttons, custom, mobileSrc, contentColor, alignContent}) {
  return (
    <Container>
      {isVideo ? 
        <video className='banner-img showInDesktop' autoPlay loop muted>
          <source src={src} type='video/mp4' />
        </video> 
        :
        <Image src='/assets/slatwall.webp' alt="newage-web" layout="responsive" width={1950} height={950}  className="banner-img showInDesktop" />
      }
      {/* <Image src='../../public/assets/mobile-banner.jpg' alt="newage-mob" className="banner-img showInMobile" /> */}
      {heading && <BannerContent
        heading={heading}
        subHeading={subHeading}
        align={align}
        custom={custom}
        buttons={buttons}
        contentColor={contentColor}
        alignContent={alignContent}
      />}
    </Container>
  )
}

export default FullWidthBanner;

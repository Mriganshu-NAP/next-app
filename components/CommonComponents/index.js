import styled from 'styled-components';

export const MainHeadingNap1 = styled.h1`
  font-size: 2.9vw;
  margin: 0;
  line-height: 1.1;
 
`;
export const SubHeadingNap4 = styled.h3`
  font-size: 1.6vw;
  margin: 20px 0;
  font-weight: 500;
 
`;
export const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: ${props => props.wrap && 'wrap'};
  margin: 80px auto;
  width: 75%;
 
`;
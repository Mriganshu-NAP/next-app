import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: 100px 0;
  width: 100%;
  background: #ddd;
  font-size:32px;
  text-align: ${props => props.place};
`;
const ChildrenDiv = styled.div`
  background-color: ${props => props.type === 'primary' ? 'red' : 'yellow'};
`;

function DemoComponent({align, bgColor, type}) {
  return (
    <Container place={align}>
      <ChildrenDiv type={type}>
        Text
      </ChildrenDiv>
    </Container>
  )
}

export default DemoComponent

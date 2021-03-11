import React from 'react';
import styled from 'styled-components'
import { useRouter } from 'next/router'

const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Container = styled.div`
  padding: 30px 20px;
  margin: 20px;
  display: flex;
  justify-content: center;
  flex: 1 0 20%;
  text-align: center;
  background: #ddd;
  box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;

const User = ({ data }) => {
  const router = useRouter()
  return <MainContainer>
    {data.map(item => (
    <Container key={item.id} onClick={() => router.push(`/user/${item.id}`)}>
      {item.username}
      <br />
      {item.name}
    </Container>
  ))}</MainContainer>
}

export const getStaticProps = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/users/')
    .then(response => response.json());

  return {
    props: {
      data
    }
  }
}

export default User;
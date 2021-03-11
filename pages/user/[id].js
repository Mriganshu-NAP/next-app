import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Container = styled.div`
  padding: 20px;
  background: #eee;
  width: 350px;
  box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.5);
`;

const UserID = ({ data }) => {
  return <MainContainer>
    <Container>
      <p><strong>Username</strong> - {data.username}</p>
      <p><strong>Name</strong> - {data.name}</p>
      <p><strong>Phone</strong> - {data.phone}</p>
      <p><strong>Website</strong> - {data.website}</p>
      <p style={{textAlign:'center'}}><strong>Address</strong></p>
      <p><strong>City</strong> - {data.address.city}</p>
      <p><strong>Street</strong> - {data.address.street}</p>
      <p><strong>Zipcode</strong> - {data.address.zipcode}</p>
    </Container>
  </MainContainer>
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
      { params: { id: '3' } },
      { params: { id: '4' } },
      { params: { id: '5' } },
      { params: { id: '6' } },
      { params: { id: '7' } },
      { params: { id: '8' } },
      { params: { id: '9' } },
      { params: { id: '10' } },
    ],
    fallback: false 
  };
}

export const getStaticProps = async (ctx) => {
  const id = ctx.params.id;
  const data = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    .then(response => response.json());

  return {
    props: {
      data
    }
  }
}

export default UserID;
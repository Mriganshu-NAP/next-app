import React from 'react';

const Todo = ({ data }) => {
  return <div>Todo - {data.title}</div>
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
      { params: { id: '3' } },
      { params: { id: '4' } },
      { params: { id: '5' } },
    ],
    fallback: false 
  };
}

export const getStaticProps = async (ctx) => {
  const id = ctx.params.id;
  const data = await fetch('https://jsonplaceholder.typicode.com/todos/' + id)
    .then(response => response.json());

  return {
    props: {
      data
    }
  }
}

export default Todo;
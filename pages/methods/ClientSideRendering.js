// client side rendered
import { useEffect, useState } from 'react';

export default function ClientSideRendered() {
  const [state, setState] = useState([]);

  async function getData() {
    const res = await fetch('https://6049cac4fb5dcc001796a87e.mockapi.io/data'); // like https://github.com/api
    const data = await res.json();
    console.log(data)
    setState(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {state.map((e) => (
        <h2 key={e.id}>{e.name} works for {e.team}</h2>
      ))}
    </>
  );
}
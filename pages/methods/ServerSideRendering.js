
// server side rendering

export default function ServerSideRendered({ state }) {
  return (
    <>
      {state.map((e) => (
        <h2 key={e.id}>{e.name} works for {e.team}</h2>
      ))}
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://6049cac4fb5dcc001796a87e.mockapi.io/data'); // like https://github.com/api
  const state = await res.json();

  return {
    props: {
      state, // will be passed to the page component as props
    },
  };
}
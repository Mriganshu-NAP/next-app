
// static site generation

export default function StaticSideGeneration({ state }) {
  return (
    <>
      {state.map((e) => (
        <h2 key={e.id}>{e.name} works for {e.team}</h2>
      ))}
    </>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  const res = await fetch('https://6049cac4fb5dcc001796a87e.mockapi.io/data'); // like https://github.com/api
  const state = await res.json();

  return {
    props: {
      state, // will be passed to the page component as props
    },
  };
}
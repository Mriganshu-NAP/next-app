// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json({ data: [
    {
      id: 1,
      name: 'Rahul',
      team: 'NAP-DI'
    },
    {
      id: 2,
      name: 'Sachin',
      team: 'SNA'
    },
    {
      id: 3,
      name: 'Sourav',
      team: 'NAP-DI'
    },
    {
      id: 4,
      name: 'Rohan',
      team: 'QA'
    },
    {
      id: 5,
      name: 'Singh',
      team: 'NAP-DI'
    },
    {
      id: 6,
      name: 'Will',
      team: 'QA'
    }
  ] })
}

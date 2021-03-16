import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import NAPButton from '../../components/NAPButton';
import { client } from '../../utils/shopify-client';
import Skeleton from '@material-ui/lab/Skeleton';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Heading = styled.h1`
  text-align: center;
`;
const ImageContainer = styled.div`
  width: 400px;
  height: 300px;
`;
const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  margin: 20px;
  width: 30%;
  text-align: center;
`;

function Shopify({products, collections}) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if(products){
      setLoading(false)
    }
  }, [products])
  console.log(loading)
  console.log({collections}, {products})
  if(loading){
    return(
      <>
        <Heading>Products List</Heading>
        <Container>
          {Array.from(new Array(3)).map((item, index) =>(
          <ItemContainer>
            <Skeleton variant="rect" animation="wave" width={400} height={300} />
          </ItemContainer>
          ))}
        </Container>
      </>
    )
  }
  return (
    <>
    <Heading>Products List</Heading>
    <Container>
      {products.map(item => (
        <ItemContainer key={item.id}>
          <ImageContainer>
            <img src={item.images[0].src} width="100%" />
          </ImageContainer>
          <h3>{item.title}</h3>
          <div>
            <strong style={{marginRight: 10}}>${item.variants[0].price}</strong>
            <s style={{marginLeft: 10}}>{item.variants[0].compareAtPrice && `$${item.variants[0].compareAtPrice}`}</s>
          </div>
          <br />
          <NAPButton text="Buy Now" />
        </ItemContainer>
      ))}
    </Container>
    <Heading>Collections List</Heading>
    <Container>
      {/* {collections.map(item => (
        <ItemContainer key={item.id}>
            {item.image && <img src={item.image.src} width="100%" />}
          <h3>{item.title}</h3>
          <NAPButton text="See All Products" onClick={() => router.push(`/shopify/${item.id}`)} />
        </ItemContainer>
      ))} */}
      {collections.map(item => (
        item?.products?.map(i => (
          <ItemContainer key={i.id}>
            <ImageContainer>
              <img src={i.images[0].src} width="100%" />
            </ImageContainer>
            <h3>{i.title}</h3>
            <div>
              <strong style={{marginRight: 10}}>${i.variants[0].price}</strong>
              <s style={{marginLeft: 10}}>{i.variants[0].compareAtPrice && `$${i.variants[0].compareAtPrice}`}</s>
            </div>
            <br />
            <NAPButton text="Buy Now" />
        </ItemContainer>
        ))
      ))}
    </Container>
    </>
  )
}
export async function getStaticProps() {
  const products = await client.product.fetchAll();
  const collections = await client.collection.fetchAllWithProducts();

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
      collections: JSON.parse(JSON.stringify(collections)),
    },
  };
}

export default Shopify

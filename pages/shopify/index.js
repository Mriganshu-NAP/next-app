import React, {useState} from 'react'
import styled from 'styled-components'
import NAPButton from '../../components/NAPButton';
import { client } from '../../utils/shopify-client';
import Fab from '@material-ui/core/Fab';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CloseIcon from '@material-ui/icons/Close';
import Badge from '@material-ui/core/Badge';
import Drawer from '@material-ui/core/Drawer';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import InfoIcon from '@material-ui/icons/Info';
import MinimizeIcon from '@material-ui/icons/Minimize';
import AddIcon from '@material-ui/icons/Add';

const MainContainer = styled.div`
  position: relative;
`;
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
const StyledFab = styled(Fab)`
  &&{
    background-color: #0072bc;
    position: fixed;
    bottom: 20px;
    right: 20px;
  }
  &&:hover{
    background-color: #245e90;
  }
`;
const StyledBadge = styled(Badge)`
  .MuiBadge-anchorOriginTopRightRectangle{
    top: -5px;
    right: -5px;
  }
`;
const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paperAnchorRight{
    width: 350px;
  }
`;
const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 2px solid #ddd;
`;
const CartHeaderItem = styled.div`
  font-size: 20px;
  font-weight: 500;
`;
const CartFooter = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 20px;
  border-top: 2px solid #ddd;
`;
const CartFooterItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
`;
const CartBody = styled.div`
  position: relative;
`;
const LineItemContainer = styled.div`
  padding: 20px;
  border-bottom: 1px solid #ddd;
`;
const LineItemHeader = styled.div`
  display: flex;
`;
const LineItemFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0 0px;
`;
const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 28px;
  font-weight: 500;
  opacity: 0.7;
`;
const StyledInfo = styled(InfoIcon)`
  &.MuiSvgIcon-root{
    margin-top: 100px;
    width: 4em;
    height: 4em;
  }
`;

function Shopify({products, checkout, collections}) {
  const [loading, setLoading] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [data, setData] = useState(null);
  const [itemId, setItemId] = useState(null);

  const handleCheckOut = () => {
    window.open(checkout.webUrl)
  }
  const handleAddToCart  = async (id, itemId) => {
    setItemId(itemId)
    setLoading(true)
    const checkoutId = checkout.id;
    const lineItemsToAdd = [
      {
        variantId: id,
        quantity: 1
      }
    ];
    const res = await client.checkout.addLineItems(checkoutId, lineItemsToAdd);
    setData(res);
    setDrawer(true)
    setLoading(false)
  }
  const handleMinusClick = async (qty, id) => {
    const checkoutId = checkout.id;
    const lineItemsToUpdate = [
      {
        id,
        quantity : qty - 1
      }
    ];
    const res = await client.checkout.updateLineItems(checkoutId, lineItemsToUpdate);
    setData(res);
  }
  const handlePlusClick = async (quantity, id) => {
    const checkoutId = checkout.id;
    const lineItemsToUpdate = [
      {
        id,
        quantity: quantity + 1
      }
    ];
    const res = await client.checkout.updateLineItems(checkoutId, lineItemsToUpdate);
    setData(res);
  }
  console.log({collections})
  return (
    <MainContainer>
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
          <NAPButton loading={itemId === item.id && loading} text="Add to Cart" onClick={() => handleAddToCart(item.variants[0].id, item.id)} />
        </ItemContainer>
      ))}
      <StyledFab color="primary" aria-label="add" onClick={() => setDrawer(true)}>
        <StyledBadge badgeContent={data ? data.lineItems.length : 0} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </StyledFab>
      <StyledDrawer anchor={'right'} open={drawer} onClose={() => setDrawer(false)}>
        <CartHeader>
          <CartHeaderItem>Your Cart</CartHeaderItem>
          <CartHeaderItem><CloseIcon style={{cursor:'pointer'}} onClick={() => setDrawer(false)} /></CartHeaderItem>
        </CartHeader>
        <CartBody>
          {data?.lineItems.map((item, index) => (
            <LineItemContainer key={index}>
              <LineItemHeader><div style={{marginRight: 10}}>Item:</div><div><b>{item.title}</b></div></LineItemHeader>
              <LineItemFooter>
                <div style={{display: 'flex', alignItems: 'center'}}><div style={{marginRight: 10}}>Qty:</div> 
                  <ButtonGroup size="small" aria-label="small contained button group">
                    <Button onClick={() => handleMinusClick(item.quantity, item.id)}><MinimizeIcon /></Button>
                    <Button>{item.quantity}</Button>
                    <Button  onClick={() => handlePlusClick(item.quantity, item.id)}><AddIcon /></Button>
                  </ButtonGroup>
                </div>
                <div style={{marginRight: 10}}>Price: <b>${item.variant.price}</b></div>
              </LineItemFooter>
            </LineItemContainer>
          ))}
          {!data || !data.lineItems.length && 
            <EmptyCart>
                <StyledInfo />
                <p>Your cart is empty!</p>
            </EmptyCart> }
        </CartBody>
        <CartFooter>
          <CartFooterItem>
            <div>SUBTOTAL</div>
            <div><b>${data ? data.subtotalPrice : '0.00'}</b></div>
          </CartFooterItem>
          <CartFooterItem>
            <div>TAXES</div>
            <div><b>${data ? data.totalTax : '0.00'}</b></div>
          </CartFooterItem>
          <CartFooterItem>
            <div>TOTAL</div>
            <div><b>${data ? data.totalPrice : '0.00'}</b></div>
          </CartFooterItem>
          <NAPButton margin={'10px 0'} width={'100%'} text="Proceed to Checkout" onClick={() => handleCheckOut()} />
        </CartFooter>
      </StyledDrawer>
    </Container>
    </MainContainer>
  )
}
export async function getStaticProps() {
  const products = await client.product.fetchAll();
  const checkout = await client.checkout.create();
  // const id = window.atob('164066951234')
  const collections = await client.collection.fetchAllWithProducts();

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
      checkout: JSON.parse(JSON.stringify(checkout)),
      collections: JSON.parse(JSON.stringify(collections))
    },
  };
}

export default Shopify

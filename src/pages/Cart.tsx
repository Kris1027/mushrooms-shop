import { Link, useNavigate } from 'react-router-dom';

import {
  type CartItem,
  addToCart,
  removeFromCart,
  resetCart,
} from '../store/cartSlice';
import { useCartDispatch, useCartSelector } from '../store/hooks';

import styled from 'styled-components';

import Wrapper from '../components/Wrapper';
import Button from '../components/Button';

function Cart() {
  const cartItems: CartItem[] = useCartSelector((state) => state.cart.items);
  const dispatch = useCartDispatch();
  const navi = useNavigate();

  const totalPrice = cartItems.reduce(
    (val: number, item: CartItem) =>
      val + (item.regularPrice - item.discount) * item.quantity,
    0
  );

  const formattedTotalPrice = totalPrice.toFixed(2);

  function handleAddToCart(item: CartItem) {
    dispatch(addToCart(item));
  }

  function handleRemoveFromCart(id: number) {
    dispatch(removeFromCart(id));
  }

  return (
    <Wrapper>
      {cartItems.length === 0 && (
        <>
          <EmptyBasket>
            Nie masz nic w koszu!
            <Emoji>🌚</Emoji>
          </EmptyBasket>
        </>
      )}
      {cartItems.length > 0 && (
        <ItemsWrapper>
          <ItemsList>
            {cartItems.map((item) => {
              const fotmattedPrice = `${
                Number((item.regularPrice - item.discount).toFixed(2)) *
                item.quantity
              } zł`;

              return (
                <Item key={item.id}>
                  <Title>
                    {item.name} <Form>({item.form})</Form>
                  </Title>
                  <div>
                    <Button onClick={() => handleRemoveFromCart(item.id)}>
                      -
                    </Button>
                    <Quantity>{item.quantity}</Quantity>
                    <Button onClick={() => handleAddToCart(item)}>+</Button>
                  </div>
                  <Txt>({fotmattedPrice})</Txt>
                </Item>
              );
            })}
          </ItemsList>
          <ButtonsWrapper>
            <Button onClick={() => navi(-1)}>Wróć</Button>
            <Button onClick={() => dispatch(resetCart())}>Usuń wszystko</Button>
            <StyledSummary to='/cart/summary'>Podsumowanie</StyledSummary>
            <TotalPrice>Całkowity koszt {formattedTotalPrice} zł</TotalPrice>
          </ButtonsWrapper>
        </ItemsWrapper>
      )}
    </Wrapper>
  );
}

export default Cart;

const EmptyBasket = styled.h1`
  color: ${(props) => props.theme.third};
  font-size: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Emoji = styled.span`
  display: block;
  font-size: 4rem;
  margin-top: 1rem;
`;

const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const ItemsList = styled.ul`
  align-content: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const Item = styled.li`
  align-items: center;
  display: flex;
  gap: 1rem;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 0.4rem;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  width: 50%;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

const Form = styled.span`
  font-size: 0.7rem;
  font-weight: 400;
`;

const Txt = styled.p`
  color: ${(props) => props.theme.secondary};
  width: 60px;

  @media (max-width: 768px) {
    font-size: 0.5rem;
    width: 40px;
  }
`;

const Quantity = styled.span`
  color: ${(props) => props.theme.secondary};
  font-size: 2rem;
  font-weight: 700;
  padding: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const TotalPrice = styled.p`
  color: ${(props) => props.theme.third};
  font-size: 2rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const StyledSummary = styled(Link)`
  background-color: ${(props) => props.theme.third};
  border: none;
  border-radius: 16px;
  color: ${(props) => props.theme.primary};
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 700;
  padding: 0.6rem 2rem;
  text-decoration: none;

  &:hover {
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.third};
  }

  &:active {
    transform: scale(0.9);
  }

  &:focus {
    color: ${(props) => props.theme.secondary};
    outline: none;
  }

  @media (max-width: 768px) {
    font-size: 0.7rem;
    padding: 0.6rem 1rem;
  }
`;

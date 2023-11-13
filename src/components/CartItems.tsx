import styled from 'styled-components';
import { type CartItem, addToCart, removeFromCart } from '../store/cartSlice';
import { useCartDispatch, useCartSelector } from '../store/hooks';
import { useNavigate } from 'react-router-dom';
import Wrapper from './Wrapper';
import Login from './Login';

export default function CartItems() {
  const cartItems = useCartSelector((state) => state.cart.items);
  const dispatch = useCartDispatch();
  const navi = useNavigate();

  const totalPrice = cartItems.reduce(
    (val, item) => val + (item.regularPrice - item.discount) * item.quantity,
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
          <EmptyBasket>Nie masz nic w koszu!</EmptyBasket>
          <Login />
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
                  <Title>{item.name}</Title>
                  <ItemButton onClick={() => handleRemoveFromCart(item.id)}>
                    -
                  </ItemButton>
                  <Quantity>{item.quantity}</Quantity>
                  <ItemButton onClick={() => handleAddToCart(item)}>
                    +
                  </ItemButton>
                  <Txt>({fotmattedPrice})</Txt>
                </Item>
              );
            })}
          </ItemsList>
          <ButtonsWrapper>
            <Button onClick={() => navi(-1)}>Wróć</Button>
            <Button>Usuń wszystko</Button>
            <Button>Płatność</Button>
            <TotalPrice>Całkowity koszt {formattedTotalPrice} zł</TotalPrice>
          </ButtonsWrapper>
        </ItemsWrapper>
      )}
    </Wrapper>
  );
}

const EmptyBasket = styled.h1`
  font-size: 2rem;
  color: ${(props) => props.theme.third};

  @media (max-width: 768px) {
    font-size: 1rem;
  }
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
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.4rem;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Txt = styled.p`
  color: ${(props) => props.theme.secondary};

  @media (max-width: 768px) {
    font-size: 0.5rem;
  }
`;

const ItemButton = styled.button`
  font-size: 1.5rem;
  width: 100px;
  height: 50px;
  border-radius: 10px;
  border: none;
  background-color: ${(props) => props.theme.primary};
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:active {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 20px;
    font-size: 1rem;
  }
`;

const Quantity = styled.span`
  font-size: 1.3rem;
  color: ${(props) => props.theme.third};
  width: 40px;
`;

const TotalPrice = styled.p`
  color: ${(props) => props.theme.third};
  font-size: 2rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Button = styled(ItemButton)`
  width: 100px;
  height: 40px;
  font-size: 1rem;

  @media (max-width: 768px) {
    width: 50px;
    height: 20px;
    font-size: 0.5rem;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

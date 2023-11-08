import styled from 'styled-components';
import { type CartItem, addToCart, removeFromCart } from '../store/cartSlice';
import { useCartDispatch, useCartSelector } from '../store/hooks';
import { useNavigate } from 'react-router-dom';

export default function CartItems() {
  const cartItems = useCartSelector((state) => state.cart.items);
  const dispatch = useCartDispatch();
  const navi = useNavigate();

  const totalPrice = cartItems.reduce(
    (val, item) => val + item.price * item.quantity,
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
    <>
      {cartItems.length === 0 && <p>Nie masz nic w koszu!</p>}
      {cartItems.length > 0 && (
        <ItemsWrapper>
          <ItemsList>
            {cartItems.map((item) => {
              const fotmattedPrice = `${
                Number(item.price.toFixed(2)) * item.quantity
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
          <TotalPrice>{formattedTotalPrice} zł</TotalPrice>
          <ButtonsWrapper>
            <Button onClick={() => navi(-1)}>Wróć</Button>
            <Button>Usuń wszystko</Button>
            <Button>Płatność</Button>
          </ButtonsWrapper>
        </ItemsWrapper>
      )}
    </>
  );
}

const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

const ItemsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  width: 250px;
`;

const Txt = styled.p`
  ${(props) => props.theme.secondary}
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
`;

const Button = styled(ItemButton)`
  width: 200px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

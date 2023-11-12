import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

import styled from 'styled-components';

import { FakeDataProps } from '../data/fakeData';

interface ProductProps {
  prod: FakeDataProps;
}

export default function Product({ prod }: ProductProps) {
  const dispatch = useDispatch();

  function handleAddToCart() {
    dispatch(addToCart({ id: prod.id, name: prod.name, price: prod.price }));
  }

  const formattedPrice = prod.price.toFixed(2);

  return (
    <ItemWrapper key={prod.id}>
      <Img src={prod.image} alt={`${prod.name} picture`} />
      <TitleWrapper>
        <Title>{prod.name}</Title>
        <Price>{formattedPrice} zł</Price>
      </TitleWrapper>
      <Button onClick={handleAddToCart}>Dodaj do koszyka</Button>
    </ItemWrapper>
  );
}

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 290px;
  cursor: pointer;
  padding: 0.5rem;
  transition: 0.2s linear;

  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  &:hover {
    transform: scale(1.04);
  }

  @media (max-width: 425px) {
    width: 320px;
    height: 350px;
  }

  @media (max-width: 768px) {
    width: 400px;
    height: 420px;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${(props) => props.theme.secondary};
`;

const Price = styled.p`
  color: ${(props) => props.theme.third};
`;

const Button = styled.button`
  margin: 0 auto;
  margin-top: 1rem;
  padding: 0.5rem;
  border-radius: 16px;
  background-color: ${(props) => props.theme.third};
  color: ${(props) => props.theme.primary};
  border: none;
  width: 80%;
  transition: 0.1s linear;
  cursor: pointer;

  &:hover {
    transform: scale(1.07);
  }

  &:focus {
    outline: none;
  }

  &:active {
    transform: scale(1);
  }
`;

const Img = styled.img`
  opacity: 0.8;
  width: 80%;
  margin: 0 auto;

  transform: scale(1.3);

  &:hover {
    opacity: 1;
  }
`;

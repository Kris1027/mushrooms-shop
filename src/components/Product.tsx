import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

import styled from 'styled-components';

import Button from './Button';
import { ProductProps } from '../services/apiProducts';

export default function Product({
  id,
  name,
  regularPrice,
  discount,
  form,
  image,
}: ProductProps) {
  const dispatch = useDispatch();

  function handleAddToCart() {
    dispatch(
      addToCart({
        id,
        name,
        regularPrice,
        discount,
        form,
      })
    );
  }

  const beforeDiscountPrice = regularPrice.toFixed(2);
  const totalPrice = (regularPrice - discount).toFixed(2);

  return (
    <Wrapper key={id}>
      <Image style={{ backgroundImage: `url(${image})` }} />
      <Title>{name}</Title>
      <Form>({form})</Form>
      <PriceWrapper>
        <Price>{totalPrice} zł</Price>
        <Discount>
          {beforeDiscountPrice === totalPrice
            ? null
            : `${beforeDiscountPrice} zł`}
        </Discount>
      </PriceWrapper>
      <Button onClick={handleAddToCart}>Dodaj do koszyka</Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  align-items: center;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 500px;
  overflow: hidden;
  width: 350px;

  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  -webkit-backdrop-filter: blur(5px);
`;

const Image = styled.div`
  background-position: center;
  background-size: cover;
  cursor: pointer;
  height: 100%;
  transition: 0.5s linear;
  width: 100%;

  &:active {
    transform: scale(200%);
  }
`;

const Title = styled.h1`
  color: ${(props) => props.theme.third};
  font-size: 1.5rem;
  font-weight: 700;
  padding: 0 2rem;
  text-align: center;
`;

const Form = styled.span`
  font-size: 1rem;
  font-weight: 400;
`;

const PriceWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
`;

const Price = styled.span`
  color: ${(props) => props.theme.secondary};
  font-size: 1rem;
  font-weight: 700;
`;

const Discount = styled.span`
  color: ${(props) => props.theme.third};
  font-size: 0.7rem;
  text-decoration: line-through;
`;

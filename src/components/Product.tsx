import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

import styled from 'styled-components';
import Button from './Button';

export type DataProps = {
  id: number;
  name: string;
  quantity: number;
  image: File;
  regularPrice: number;
  discount: number;
  description?: string;
  form: string;
};

type ProductProps = {
  prod: DataProps;
};

export default function Product({ prod }: ProductProps) {
  const dispatch = useDispatch();

  function handleAddToCart() {
    dispatch(
      addToCart({
        id: prod.id,
        name: prod.name,
        regularPrice: prod.regularPrice,
        discount: prod.discount,
        form: prod.form,
      })
    );
  }

  const beforeDiscountPrice = prod.regularPrice.toFixed(2);
  const totalPrice = (prod.regularPrice - prod.discount).toFixed(2);

  return (
    <Wrapper key={prod.id}>
      <Image style={{ backgroundImage: `url(${prod.image})` }} />
      <Title>
        {prod.name} <Form>({prod.form})</Form>
      </Title>
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
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 16px;
  overflow: hidden;
  width: 350px;
  height: 500px;

  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  transition: 0.5s linear;
  cursor: pointer;

  &:active {
    transform: scale(200%);
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  padding: 0 2rem;
  color: ${(props) => props.theme.third};
`;

const Form = styled.span`
  font-size: 1rem;
  font-weight: 400;
`;

const PriceWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;

const Price = styled.span`
  font-size: 1rem;
  font-weight: 700;
  color: ${(props) => props.theme.secondary};
`;

const Discount = styled.span`
  font-size: 0.7rem;
  color: ${(props) => props.theme.third};
  text-decoration: line-through;
`;

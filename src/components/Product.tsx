import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

import styled from 'styled-components';

interface DataProps {
  id: number;
  name: string;
  quantity: number;
  image: string;
  regularPrice: number;
  discount: number;
  description?: string;
}

interface ProductProps {
  prod: DataProps;
}

export default function Product({ prod }: ProductProps) {
  const dispatch = useDispatch();

  function handleAddToCart() {
    dispatch(
      addToCart({
        id: prod.id,
        name: prod.name,
        regularPrice: prod.regularPrice,
        discount: prod.discount,
      })
    );
  }

  const beforeDiscountPrice = prod.regularPrice.toFixed(2);
  const totalPrice = (prod.regularPrice - prod.discount).toFixed(2);

  return (
    <ItemWrapper key={prod.id}>
      <Image>
        <img src={prod.image} alt={`${prod.name} picture`} />
      </Image>
      <TitleWrapper>
        <Title>{prod.name}</Title>
        <div>
          <Price>{totalPrice} zł</Price>
          <DiscountPrice>
            {beforeDiscountPrice === totalPrice
              ? null
              : `${beforeDiscountPrice} zł`}
          </DiscountPrice>
        </div>
      </TitleWrapper>
      <Button onClick={handleAddToCart}>Dodaj do koszyka</Button>
    </ItemWrapper>
  );
}

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 320px;
  cursor: pointer;
  padding: 0.5rem;
  transition: 0.2s linear;

  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  @media (max-width: 425px) {
    width: 320px;
    height: 370px;
  }

  @media (max-width: 768px) {
    width: 400px;
    height: 500px;
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

const DiscountPrice = styled.div`
  text-decoration: line-through;
  font-size: 0.7rem;
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

const Image = styled.div`
  img {
    width: 100%;
    opacity: 0.9;
    transition: 0.2s linear;

    &:hover {
      opacity: 1;
      transform: scale(1.5);
    }
  }
`;

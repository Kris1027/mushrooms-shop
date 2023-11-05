import styled from 'styled-components';
import { fakeDataProps } from './data/fakeData';
import { Link } from 'react-router-dom';

interface ProductProps {
  prod: fakeDataProps;
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
  border: 1px solid rgba(255, 255, 255, 0.3);

  &:hover {
    transform: scale(1.04);
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

export default function Product({ prod }: ProductProps) {
  return (
    <Link to={`/products/${prod.id}`}>
      <ItemWrapper key={prod.id}>
        <Img src={prod.photos[0]} alt={`${prod.name} picture`} />
        <TitleWrapper>
          <Title>{prod.name}</Title>
          <Price>{prod.price} zł</Price>
        </TitleWrapper>
        <Button>Dodaj do koszyka</Button>
      </ItemWrapper>
    </Link>
  );
}

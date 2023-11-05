import styled from 'styled-components';
import { fakeDataProps } from './data/fakeData';
import { Link } from 'react-router-dom';

interface ProductProps {
  prod: fakeDataProps;
}

const StyledItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 250px;
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

const StyledTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${(props) => props.theme.secondary};
`;

const StyledPrice = styled.p`
  color: ${(props) => props.theme.third};
`;

const StyledButton = styled.button`
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

const StyledImg = styled.img`
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;

export default function Product({ prod }: ProductProps) {
  return (
    <Link to={`/fullproduct/${prod.id}`}>
      <StyledItemWrapper key={prod.id}>
        <StyledImg src={prod.photos[0]} alt={`${prod.name} picture`} />
        <StyledTitleWrapper>
          <StyledTitle>{prod.name}</StyledTitle>
          <StyledPrice>{prod.price} zł</StyledPrice>
        </StyledTitleWrapper>
        <StyledButton>Dodaj do koszyka</StyledButton>
      </StyledItemWrapper>
    </Link>
  );
}

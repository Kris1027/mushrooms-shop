import styled from 'styled-components';
import { fakeDataProps } from '../components/data/fakeData';

interface ProductProps {
  prod: fakeDataProps;
}

const StyledItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 300px;
  cursor: pointer;
  padding: 0.5rem;

  background: rgba(255, 255, 255, 0.27);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  &:hover {
    transform: scale(1.1);
  }
`;

const StyledTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #f93943;
`;

const StyledPrice = styled.p`
  color: #ffdd00;
`;

const StyledButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem;
  border-radius: 16px;
  background-color: #ffdd00;
  color: #f93943;
`;

export default function Product({ prod }: ProductProps) {
  return (
    <StyledItemWrapper key={prod.id}>
      <img src={prod.photos[0]} alt={`${prod.name} picture`} />
      <StyledTitleWrapper>
        <StyledTitle>{prod.name}</StyledTitle>
        <StyledPrice>{prod.price} zł</StyledPrice>
      </StyledTitleWrapper>
      <StyledButton>Dodaj do koszyka</StyledButton>
    </StyledItemWrapper>
  );
}

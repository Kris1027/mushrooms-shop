import styled from 'styled-components';
import { fakeData } from '../components/data/fakeData';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledImg = styled.img`
  height: 600px;
  border-radius: 10%;
  margin: 2rem;
  opacity: 0.9;

  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  &:hover {
    opacity: 1;
  }
`;

const StyledHeading = styled.h1`
  font-size: 5rem;
  color: ${(props) => props.theme.primary};
`;

const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledPrice = styled.p`
  color: ${(props) => props.theme.third};
  font-weight: 700;
  font-size: 1.5rem;
`;

const StyledTxt = styled.p`
  font-size: 1.4rem;
  opacity: 0.8;
  color: ${(props) => props.theme.secondary};
`;

const StyledButton = styled.button`
  font-size: 1rem;
  font-weight: 700;
  color: ${(props) => props.theme.third};
  background-color: ${(props) => props.theme.primary};
  padding: 1rem;
  border-radius: 16px;
  border: none;
  margin: 1rem;
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

const StyledInput = styled.input`
  width: 20px;
  height: 20px;
  text-align: center;
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.secondary};
  font-size: 1.2rem;

  &:focus {
    outline: none;
  }
`;

export default function FullProduct() {
  const { id } = useParams<{ id: string }>();
  const nav = useNavigate();
  const [amount, setAmount] = useState(0);

  const prod = fakeData.find((product) => product.id === Number(id));

  if (!prod) {
    return null;
  }

  function handleAddAmount() {
    if (amount === prod?.quantity) return;
    setAmount((prevAmount) => prevAmount + 1);
  }

  function handleRemoveAmount() {
    if (amount === 0) return;
    setAmount((prevAmount) => prevAmount - 1);
  }

  return (
    <StyledWrapper>
      <StyledImg src={prod.photos[0]} alt='' />
      <StyledSection>
        <StyledHeading>{prod.name}</StyledHeading>
        <StyledTxt>{prod.longDescription}</StyledTxt>
        <div>
          <StyledPrice>{prod.price} zł</StyledPrice>
          <StyledButton onClick={handleRemoveAmount}>-</StyledButton>
          <StyledInput type='text' value={amount} />
          <StyledButton onClick={handleAddAmount}>+</StyledButton>
        </div>
        <div>
          <StyledButton onClick={() => nav(-1)}>Wstecz</StyledButton>
          <StyledButton>Kup teraz</StyledButton>
          <StyledButton>Dodaj do koszyka</StyledButton>
        </div>
      </StyledSection>
    </StyledWrapper>
  );
}

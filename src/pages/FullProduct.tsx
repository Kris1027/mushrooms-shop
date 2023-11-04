import styled from 'styled-components';
import { fakeData } from '../components/data/fakeData';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledImg = styled.img`
  height: 600px;
  border-radius: 10%;
  margin: 2rem;
  opacity: 0.8;

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
  color: #f93943;
`;

const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledPrice = styled.p`
  color: yellow;
  font-weight: 700;
  font-size: 1.5rem;
`;

const StyledTxt = styled.p`
  font-size: 1.4rem;
  opacity: 0.8;
`;

const StyledButton = styled.button`
  font-size: 1rem;
  font-weight: 700;
  color: yellow;
  background-color: red;
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

export default function FullProduct() {
  const prod = fakeData[0];

  return (
    <StyledWrapper>
      <StyledImg src={prod.photos[0]} alt='' />
      <StyledSection>
        <StyledHeading>{prod.name}</StyledHeading>
        <StyledTxt>{prod.longDescription}</StyledTxt>
        <StyledPrice>{prod.price} zł</StyledPrice>
        <div>
          <StyledButton>Kup teraz</StyledButton>
          <StyledButton>Dodaj do koszyka</StyledButton>
        </div>
      </StyledSection>
    </StyledWrapper>
  );
}

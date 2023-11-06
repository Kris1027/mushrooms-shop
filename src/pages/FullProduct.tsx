import styled from 'styled-components';
import { fakeData } from '../components/data/fakeData';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 1280px;
  margin: 0 auto;
`;

const Img = styled.img`
  height: 600px;
  border-radius: 10%;
  margin: 2rem;
  opacity: 0.9;

  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  &:hover {
    opacity: 1;
  }
`;

const Heading = styled.h1`
  font-size: 5rem;
  color: ${(props) => props.theme.primary};
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Price = styled.p`
  color: ${(props) => props.theme.third};
  font-weight: 700;
  font-size: 1.5rem;
`;

const Txt = styled.p`
  font-size: 1.4rem;
  opacity: 0.8;
  color: ${(props) => props.theme.secondary};
`;

const Button = styled.button`
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

const Input = styled.input`
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

  function handleAddAmount() {
    if (amount === prod?.quantity) return;
    setAmount((prevAmount) => prevAmount + 1);
  }

  function handleRemoveAmount() {
    if (amount === 0) return;
    setAmount((prevAmount) => prevAmount - 1);
  }

  if (!prod) {
    return null;
  }

  return (
    <Wrapper>
      <Img src={prod.photos[0]} alt='' />
      <Section>
        <Heading>{prod.name}</Heading>
        <Txt>{prod.longDescription}</Txt>
        <div>
          <Price>{prod.price} zł</Price>
          <Button onClick={handleRemoveAmount}>-</Button>
          <Input type='text' value={amount} />
          <Button onClick={handleAddAmount}>+</Button>
        </div>
        <div>
          <Button onClick={() => nav(-1)}>Wstecz</Button>
          <Button>Kup teraz</Button>
          <Button>Dodaj do koszyka</Button>
        </div>
      </Section>
    </Wrapper>
  );
}

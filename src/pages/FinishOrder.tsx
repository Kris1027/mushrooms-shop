import styled from 'styled-components';
import Wrapper from '../components/Wrapper';

export default function FinishOrder() {
  return (
    <Wrapper>
      <div>
        <Title>Dziekujemy za zamówienie!</Title>
        <Txt>Po otrzymaniu wpłaty otrzymasz e-mail potwiedzający</Txt>
        <Txt>Zapraszamy ponownie</Txt>
      </div>
    </Wrapper>
  );
}

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

const Txt = styled.p`
  font-size: 2rem;
  color: ${(props) => props.theme.primary};

  @media (max-width: 768px) {
    font-size: 0.5rem;
  }
`;

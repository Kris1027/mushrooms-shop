import styled from 'styled-components';
import Wrapper from '../components/Wrapper';

export default function Contact() {
  return (
    <Wrapper>
      <Title>Masz jakieś pytania?</Title>
      <Txt>Skontaktuj sie z nami poprzez e-mail</Txt>
      <Email>{import.meta.env.VITE_CONTACT_EMAIL_ADRESS}</Email>
      <Title>Bank</Title>
      <Txt>{import.meta.env.VITE_NAME}</Txt>
      <Txt>nr konta: {import.meta.env.VITE_BANK_ACCOUNT}</Txt>
      <Txt>blik: {import.meta.env.VITE_BLIK}</Txt>
    </Wrapper>
  );
}

const Title = styled.h2`
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

const Email = styled.p`
  font-size: 1.8rem;
  color: ${(props) => props.theme.third};

  @media (max-width: 768px) {
    font-size: 0.5rem;
  }
`;

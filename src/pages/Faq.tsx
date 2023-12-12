import styled from 'styled-components';

import Wrapper from '../components/Wrapper';

export default function Faq() {
  return (
    <Wrapper>
      <Container>
        <Title>Jak robić zakupy w naszym sklepie</Title>
        <ul>
          <Step>Krok 1.</Step>
          <Li>Wybierz interesujące Cię produkty w zakładce "Produkty"</Li>
          <Step>Krok 2.</Step>
          <Li>
            Przejdź do kosza i upewnij się czy napewno wybrałeś wszystko co
            potrzebujesz
          </Li>
          <Step>Krok 3.</Step>
          <Li>
            Wybierz podsumowanie, strona przekieruję Cię do podsumowania Twojego
            zamówienia. Wszystko sie zgadza? Wybierz "Kupuję!"
          </Li>
          <Step>Krok 4.</Step>
          <Li>
            Otworzy Ci sie Twój klient poczty, w tytule masz podany nr
            zamówienia - Zapisz sobie go{' '}
          </Li>
          <Li>
            Wypełnij pola z danymi osobowymi i adresem do przesyłki - Bez nich
            nie możemy wysłać zamówienia
          </Li>
          <Step>Krok 5.</Step>
          <Li>
            Wyślij kwotę zamówienia na podany rachunek bankowy - W tytule podaj
            numer zamówienia, który masz zapisany w tytule e-mail
          </Li>
          <Step>Krok 6.</Step>
          <Li>Wyślij e-mail</Li>
        </ul>
        <Info>Tylko opłacone zamówienia będą realizowane</Info>
        <Info>Po otrzymaniu wpłaty dostaniesz e-mail potwierdzający</Info>
      </Container>
    </Wrapper>
  );
}

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

const Info = styled.h2`
  color: ${(props) => props.theme.third};
  font-size: 2rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

const Step = styled.li`
  color: ${(props) => props.theme.primary};
  font-size: 2rem;
  padding-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 0.5rem;
  }
`;

const Li = styled.li`
  color: ${(props) => props.theme.color};
  font-size: 1.4rem;
  padding-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 0.5rem;
  }
`;

import styled from 'styled-components';
import Button from '../components/Button';
import Input from '../components/Input';

export default function Register() {
  return (
    <Wrapper>
      <Txt>Nie masz jeszcze konta?</Txt>
      <Heading>Zarejestruj się!</Heading>
      <Input type='text' placeholder='Imię' />
      <Input type='text' placeholder='Nazwisko' />
      <Input type='email' placeholder='Adres e-mail' />
      <Input type='text' placeholder='Ulica' />
      <Input type='text' placeholder='Kod pocztowy' />
      <Input type='email' placeholder='Miasto' />
      <Input type='number' placeholder='Telefon' />
      <Button type='submit'>Utwórz konto</Button>
    </Wrapper>
  );
}

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  padding: 2rem;

  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
`;

const Heading = styled.h1`
  font-size: 3rem;
  color: ${(props) => props.theme.secondary};
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
`;

const Txt = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

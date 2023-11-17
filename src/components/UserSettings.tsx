import styled from 'styled-components';
import Button from './Button';
import Input from './Input';

export default function UserSettings() {
  return (
    <Form>
      <Label>
        Zmień imię i nazwisko
        <Input type='text' placeholder='Imię i nazwisko' />
      </Label>
      <Label>
        Zmień ulicę i numer domu/mieszkania
        <Input type='text' placeholder='Ulica i nr' />
      </Label>
      <Label>
        Zmień kod pocztowy
        <Input type='text' placeholder='Kod pocztowy' />
      </Label>
      <Label>
        Zmień miasto
        <Input type='text' placeholder='Miasto' />
      </Label>
      <Label>
        Zmień adres e-mail
        <Input type='text' placeholder='Adres e-mail' />
      </Label>
      <Label>
        Zmień numer telefonu
        <Input type='text' placeholder='Telefon' />
      </Label>
      <Button>Zatwierdź</Button>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
`;

const Label = styled.label`
  font-weight: 700;
`;

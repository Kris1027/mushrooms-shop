import Button from './Button';
import Input from './Input';

export default function UserSettings() {
  return (
    <form>
      <label>
        Zmień imię i nazwisko
        <Input type='text' placeholder='Imię i nazwisko' />
      </label>
      <label>
        Zmień ulicę i numer domu/mieszkania
        <Input type='text' placeholder='Ulica i nr' />
      </label>
      <label>
        Zmień kod pocztowy
        <Input type='text' placeholder='Kod pocztowy' />
      </label>
      <label>
        Zmień miasto
        <Input type='text' placeholder='Miasto' />
      </label>
      <label>
        Zmień adres e-mail
        <Input type='text' placeholder='Adres e-mail' />
      </label>
      <label>
        Zmień numer telefonu
        <Input type='text' placeholder='Telefon' />
      </label>
      <Button>Zatwierdź</Button>
    </form>
  );
}

import styled from 'styled-components';
import Button from './Button';
import Input from './Input';

export default function ProductForm() {
  return (
    <Form>
      <Input type='text' placeholder='ID' />
      <Input type='text' placeholder='Nazwa' />
      <Input type='text' placeholder='Cena Podstawowa' />
      <Input type='text' placeholder='Zniżka' />
      <Input type='text' placeholder='Forma' />
      <Input type='text' placeholder='Opis' />
      <Input type='file' placeholder='Zdjęcie' />
      <Button type='submit'>Dodaj</Button>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 0.5rem;
`;

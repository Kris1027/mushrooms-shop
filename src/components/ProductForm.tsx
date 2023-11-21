import styled from 'styled-components';
import Button from './Button';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createProduct } from '../services/apiProducts';
import { DataProps } from './Product';

export default function ProductForm() {
  const { register, handleSubmit, reset } = useForm<DataProps>();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
    onError: (err) => console.error(err.message),
  });

  function onSubmit(data: DataProps) {
    mutate(data);
    reset();
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <input type='number' id='id' placeholder='ID' {...register('id')} />
      <input type='text' id='name' placeholder='Nazwa' {...register('name')} />
      <input
        type='number'
        id='regularPrice'
        placeholder='Cena'
        {...register('regularPrice')}
      />
      <input
        type='number'
        id='discount'
        placeholder='Zniżka'
        {...register('discount')}
      />
      <textarea
        id='description'
        placeholder='Opis'
        {...register('description')}
      />
      <input type='text' id='form' placeholder='Forma' {...register('form')} />
      <input
        type='text'
        id='image'
        placeholder='Zdjęcie'
        {...register('image')}
      />
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

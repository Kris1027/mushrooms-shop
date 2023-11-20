import { useState } from 'react';

import styled from 'styled-components';
import Button from '../components/Button';
import Input from '../components/Input';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { deleteProduct, getProducts } from '../services/apiProducts';
import Spinner from '../components/Spinner';

export default function AdminDashboard() {
  const [board, setBoard] = useState(1);

  const queryClient = useQueryClient();

  const {
    isLoading,
    data: products,
    error,
  } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  const { mutate } = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['products'],
      });
    },
  });

  if (isLoading) return <Spinner />;
  if (error) return <p>{error.message}</p>;

  return (
    <Wrapper>
      <Dashboard>
        <DashboardHeading>Panel Admina</DashboardHeading>
        <Button onClick={() => setBoard(1)}>Dodaj produkt</Button>
        <Button onClick={() => setBoard(2)}>Edytuj/Usuń produkt</Button>
      </Dashboard>
      <Board>
        {board === 1 && (
          <>
            <BoardHeading>Dodaj produkt</BoardHeading>
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
          </>
        )}
        {board === 2 && (
          <>
            <BoardHeading>Edytuj/Usuń produkt</BoardHeading>
            {products?.map((prod) => (
              <Product key={prod.id}>
                {prod.name}, {prod.form}
                <Button>Edytuj</Button>
                <Button onClick={() => mutate(prod.id)}>Usuń</Button>
              </Product>
            ))}
          </>
        )}
      </Board>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  min-height: 80vh;
`;

const Dashboard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  flex-grow: 1;

  border-radius: 16px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
`;
const Board = styled.section`
  display: flex;
  flex-direction: column;
  flex-basis: 60%;
  align-items: flex-end;
  gap: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 0.5rem;
`;

const Product = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const DashboardHeading = styled.h1`
  font-size: 2rem;
`;

const BoardHeading = styled.h2`
  font-size: 2rem;
  color: ${(props) => props.theme.third};
`;

import { useState } from 'react';

import styled from 'styled-components';
import Button from '../components/Button';
import ProductForm from '../components/ProductForm';
import EditDeleteProduct from '../components/EditDeleteProduct';

export default function AdminDashboard() {
  const [board, setBoard] = useState(1);

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
            <ProductForm />
          </>
        )}
        {board === 2 && (
          <>
            <BoardHeading>Edytuj/Usuń produkt</BoardHeading>
            <EditDeleteProduct />
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

const DashboardHeading = styled.h1`
  font-size: 2rem;
`;

const BoardHeading = styled.h2`
  font-size: 2rem;
  color: ${(props) => props.theme.third};
`;

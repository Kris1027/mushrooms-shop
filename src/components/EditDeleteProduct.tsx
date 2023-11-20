import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { deleteProduct, getProducts } from '../services/apiProducts';
import Spinner from './Spinner';
import styled from 'styled-components';
import Button from './Button';

export default function EditDeleteProduct() {
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
    <>
      {products?.map((prod) => (
        <Product key={prod.id}>
          {prod.name}, {prod.form}
          <Button>Edytuj</Button>
          <Button onClick={() => mutate(prod.id)}>Usuń</Button>
        </Product>
      ))}
    </>
  );
}

const Product = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

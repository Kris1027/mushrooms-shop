import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../services/apiProducts';

import styled from 'styled-components';

import Wrapper from '../components/Wrapper';
import Product from '../components/Product';
import Spinner from '../components/Spinner';

export default function Products() {
  const {
    isLoading,
    data: products,
    error,
  } = useQuery({
    queryKey: ['product'],
    queryFn: getProducts,
  });

  if (isLoading) return <Spinner />;
  if (error) return <p>{error.message}</p>;
  return (
    <Wrapper>
      <ProductsContainer>
        {products?.map((prod) => (
          <Product prod={prod} key={prod.id} />
        ))}
      </ProductsContainer>
    </Wrapper>
  );
}

const ProductsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

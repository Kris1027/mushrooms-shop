import { type ProductProps, getProducts } from '../services/apiProducts';

import styled from 'styled-components';

import Wrapper from '../components/Wrapper';
import Product from '../components/Product';
import Spinner from '../components/Spinner';
import { useEffect, useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState<ProductProps[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((error: Error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <Spinner />;
  if (error) return <p>{error}</p>;

  return (
    <Wrapper>
      <ProductsContainer>
        {products?.map((prod: ProductProps) => (
          <Product {...prod} key={prod.id} />
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

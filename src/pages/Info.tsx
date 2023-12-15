import { useEffect, useState } from 'react';
import { type ProductProps, getProducts } from '../services/apiProducts';

import styled from 'styled-components';

import Wrapper from '../components/Wrapper';
import Spinner from '../components/Spinner';

export default function Info() {
  const [products, setProducts] = useState<ProductProps[]>([]);
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

  const filteredProducts: ProductProps[] = products?.filter(
    (prod) => prod.description !== null
  );

  return (
    <Wrapper>
      <InfoContainer>
        {filteredProducts?.map((prod) => (
          <div key={prod.id}>
            <Title>{prod.name}</Title>
            <Text>{prod.description}</Text>
          </div>
        ))}
      </InfoContainer>
    </Wrapper>
  );
}

const InfoContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.third};
  font-size: 2rem;
  padding-bottom: 1rem;
`;

const Text = styled.p`
  color: ${(props) => props.theme.primary};
  font-size: 0.9rem;
`;

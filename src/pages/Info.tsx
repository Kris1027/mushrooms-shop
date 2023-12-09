import { useQuery } from '@tanstack/react-query';

import { getProducts } from '../services/apiProducts';

import Wrapper from '../components/Wrapper';
import Spinner from '../components/Spinner';
import styled from 'styled-components';

export default function Info() {
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

  const filteredProducts = products?.filter(
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
  padding-bottom: 1rem;
  font-size: 2rem;
  color: ${(props) => props.theme.third};
`;

const Text = styled.p`
  color: ${(props) => props.theme.primary};
  font-size: 0.9rem;
`;

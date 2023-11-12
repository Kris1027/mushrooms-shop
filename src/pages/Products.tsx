import { useQuery } from '@tanstack/react-query';

import { getProducts } from '../services/apiProducts';

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
      {products?.map((prod) => (
        <Product prod={prod} key={prod.id} />
      ))}
    </Wrapper>
  );
}

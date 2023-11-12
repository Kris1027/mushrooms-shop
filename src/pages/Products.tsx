import { useQuery } from '@tanstack/react-query';

import { getProducts } from '../services/apiProducts';

import Wrapper from '../components/Wrapper';
import Product from '../components/Product';

export default function Products() {
  const {
    isLoading,
    data: products,
    error,
  } = useQuery({
    queryKey: ['product'],
    queryFn: getProducts,
  });

  if (isLoading) return <p>Ładowanie...</p>;
  if (error) return console.log(error.message);

  return (
    <Wrapper>
      {products?.map((prod) => (
        <Product prod={prod} key={prod.id} />
      ))}
    </Wrapper>
  );
}

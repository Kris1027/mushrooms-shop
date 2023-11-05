import styled from 'styled-components';
import { fakeData } from '../components/data/fakeData';
import Product from '../components/Product';

const StyledProductsWrapper = styled.div`
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem;

  a {
    text-decoration: none;
  }
`;

export default function Products() {
  return (
    <StyledProductsWrapper>
      {fakeData.map((prod) => (
        <Product prod={prod} key={prod.id} />
      ))}
    </StyledProductsWrapper>
  );
}

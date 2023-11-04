import styled from 'styled-components';
import { fakeData } from '../components/data/fakeData';
import Product from './Product';

const StyledProductsWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem;
`;

export default function Products() {
  return (
    <StyledProductsWrapper>
      {fakeData.map((prod) => (
        <Product prod={prod} />
      ))}
    </StyledProductsWrapper>
  );
}

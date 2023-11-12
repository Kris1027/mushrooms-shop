import { fakeData } from '../data/fakeData';

import Product from '../components/Product';
import Wrapper from '../components/Wrapper';

export default function Products() {
  return (
    <Wrapper>
      {fakeData.map((prod) => (
        <Product prod={prod} key={prod.id} />
      ))}
    </Wrapper>
  );
}

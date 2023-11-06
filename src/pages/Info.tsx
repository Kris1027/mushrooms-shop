import Wrapper from '../components/Wrapper';
import { fakeData } from '../components/data/fakeData';

export default function Info() {
  return (
    <Wrapper>
      {fakeData.map((prod) => (
        <div key={prod.id}>
          <img src={prod.photos[0]} alt='' />
          <h1>{prod.name}</h1>
          <p>{prod.longDescription}</p>
        </div>
      ))}
    </Wrapper>
  );
}

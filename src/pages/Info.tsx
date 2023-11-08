import styled from 'styled-components';
import Wrapper from '../components/Wrapper';
import { fakeData } from '../components/data/fakeData';

export default function Info() {
  return (
    <Wrapper>
      {fakeData.map((prod) => (
        <div key={prod.id}>
          <Heading>{prod.name}</Heading>
          <img src={prod.image} alt='' />
          <p>{prod.description}</p>
        </div>
      ))}
    </Wrapper>
  );
}

const Heading = styled.h1`
  font-size: 8rem;
  color: ${(props) => props.theme.third};
`;

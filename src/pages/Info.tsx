import styled from 'styled-components';
import Wrapper from '../components/Wrapper';
import { fakeData } from '../data/fakeData';

export default function Info() {
  return (
    <Wrapper>
      {fakeData.map((prod) => (
        <InfoProd key={prod.id}>
          <Img src={prod.image} alt='' />
          <Heading>{prod.name}</Heading>
          <p>{prod.description}</p>
        </InfoProd>
      ))}
    </Wrapper>
  );
}

const Heading = styled.h1`
  font-size: 2rem;
  color: ${(props) => props.theme.third};
`;

const InfoProd = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-content: center;
  flex-wrap: wrap;
`;

const Img = styled.img`
  width: 200px;
`;

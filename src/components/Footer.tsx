import styled from 'styled-components';
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from 'react-icons/ai';
import { fakeData } from './data/fakeData';
import Logo from './Logo';

export default function Footer() {
  return (
    <Wrapper>
      <Socials>
        <div>
          <Icon>
            <AiFillFacebook />
          </Icon>
          <Icon>
            <AiFillLinkedin />
          </Icon>
          <Icon>
            <AiFillInstagram />
          </Icon>
        </div>
        <Logo />
      </Socials>
      <Products>
        {fakeData.map((prod) => (
          <span key={prod.id}>{prod.name}</span>
        ))}
      </Products>
      <Copyrights>
        &copy; 2023 All rights reserved. Designed & crafted with love by{' '}
        <a
          href='https://www.linkedin.com/in/krzysztof-obarzanek-6b8803254/'
          target='blank'
        >
          Kris1027
        </a>
      </Copyrights>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 0.3rem;
  }
`;

const Socials = styled.section`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0;
    flex-direction: column;
    align-items: center;
  }
`;

const Icon = styled.span`
  font-size: 2rem;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.third};
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Products = styled.section`
  display: flex;
  font-size: 1rem;
  gap: 1rem;

  @media (max-width: 768px) {
    font-size: 0.6rem;
  }
`;

const Copyrights = styled.section`
  font-size: 0.7rem;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.third};
  }

  @media (max-width: 768px) {
    font-size: 0.5rem;
  }
`;

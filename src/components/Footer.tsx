import styled from 'styled-components';
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from 'react-icons/ai';

import Logo from './Logo';

export default function Footer() {
  return (
    <Wrapper>
      <Socials>
        <div>
          <a
            href='https://www.facebook.com/groups/780484819690637'
            target='blank'
          >
            <Icon>
              <AiFillFacebook />
            </Icon>
          </a>
          <Icon>
            <AiFillLinkedin />
          </Icon>
          <Icon>
            <AiFillInstagram />
          </Icon>
        </div>
        <Logo />
      </Socials>
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
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    gap: 0.3rem;
  }
`;

const Socials = styled.section`
  display: flex;
  gap: 1rem;

  a {
    color: ${(props) => props.theme.secondary};
    text-decoration: none;
  }

  @media (max-width: 768px) {
    align-items: center;
    flex-direction: column;
    gap: 0;
  }
`;

const Icon = styled.span`
  cursor: pointer;
  font-size: 2rem;

  &:hover {
    color: ${(props) => props.theme.third};
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Copyrights = styled.section`
  font-size: 0.7rem;

  a {
    color: ${(props) => props.theme.third};
    text-decoration: none;
  }

  @media (max-width: 768px) {
    font-size: 0.5rem;
  }
`;

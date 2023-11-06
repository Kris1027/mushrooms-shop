import styled from 'styled-components';
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from 'react-icons/ai';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Socials = styled.section`
  display: flex;
`;

const Icon = styled.span`
  font-size: 2rem;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.third};
  }
`;

const Copyrights = styled.section`
  font-size: 0.7rem;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.third};
  }
`;

export default function Footer() {
  return (
    <Wrapper>
      <Socials>
        <Icon>
          <AiFillFacebook />
        </Icon>
        <Icon>
          <AiFillLinkedin />
        </Icon>
        <Icon>
          <AiFillInstagram />
        </Icon>
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

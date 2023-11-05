import styled from 'styled-components';
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from 'react-icons/ai';

const FooterWrapper = styled.footer`
  height: 220px;
  overflow: hidden;
  position: relative;
  color: ${(props) => props.theme.secondary};
`;

const InfoWrapper = styled.div`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -80%);
  display: flex;
  flex-direction: column;
  z-index: 50;
`;

const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.7rem;
  font-size: 2rem;
`;

const Copyrights = styled.div`
  font-size: 0.7rem;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.third};
  }
`;

const Icon = styled.span`
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.third};
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <InfoWrapper>
        <IconsWrapper>
          <Icon>
            <AiFillFacebook />
          </Icon>
          <Icon>
            <AiFillLinkedin />
          </Icon>
          <Icon>
            <AiFillInstagram />
          </Icon>
        </IconsWrapper>
        <Copyrights>
          &copy; 2023 All rights reserved. Designed & crafted with love by{' '}
          <a
            href='https://www.linkedin.com/in/krzysztof-obarzanek-6b8803254/'
            target='blank'
          >
            Kris1027
          </a>
        </Copyrights>
      </InfoWrapper>
    </FooterWrapper>
  );
}

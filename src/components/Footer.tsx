import styled from 'styled-components';
import FooterWaves from './FooterWaves';
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from 'react-icons/ai';

const StyledFooter = styled.footer`
  height: 150px;
  overflow: hidden;
  position: relative;

  @media (max-width: 430px) {
    height: 100px;
  }

  @media (max-width: 840px) {
    height: 100px;
  }
`;

const StyledInfoWrapper = styled.div`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -80%);
  display: flex;
  flex-direction: column;
  z-index: 50;
`;

const StyledIconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.7rem;
  font-size: 2rem;
`;

const StyledCopyrights = styled.div`
  font-size: 0.7rem;

  a {
    text-decoration: none;
    color: #fff700;

    &:hover {
      color: #ff69e8;
    }
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <StyledInfoWrapper>
        <StyledIconsWrapper>
          <AiFillFacebook />
          <AiFillLinkedin />
          <AiFillInstagram />
        </StyledIconsWrapper>
        <StyledCopyrights>
          &copy; 2023 All rights reserved. Designed & crafted with love by{' '}
          <a
            href='https://www.linkedin.com/in/krzysztof-obarzanek-6b8803254/'
            target='blank'
          >
            Kris1027
          </a>
        </StyledCopyrights>
      </StyledInfoWrapper>
      <FooterWaves />
    </StyledFooter>
  );
}

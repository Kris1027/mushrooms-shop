import styled from 'styled-components';
import FooterWaves from './FooterWaves';
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from 'react-icons/ai';
import { themeProps } from '../App';

const StyledFooter = styled.footer`
  height: 150px;
  overflow: hidden;
  position: relative;
  color: ${(props) => props.theme.secondary};

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
    color: ${(props) => props.theme.third};
  }
`;

const StyledIcon = styled.span`
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.third};
  }
`;

interface FooterProps {
  dark: themeProps;
  theme: themeProps;
}

export default function Footer({ dark, theme }: FooterProps) {
  return (
    <StyledFooter>
      <StyledInfoWrapper>
        <StyledIconsWrapper>
          <StyledIcon>
            <AiFillFacebook />
          </StyledIcon>
          <StyledIcon>
            <AiFillLinkedin />
          </StyledIcon>
          <StyledIcon>
            <AiFillInstagram />
          </StyledIcon>
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
      <FooterWaves dark={dark} theme={theme} />
    </StyledFooter>
  );
}

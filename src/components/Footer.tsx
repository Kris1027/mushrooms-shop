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
  text-align: center;
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
        <div>
          &copy; 2023 All rights reserved. Designed & crafted with love by
          Kris1027
        </div>
      </StyledInfoWrapper>
      <FooterWaves />
    </StyledFooter>
  );
}

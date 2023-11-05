import styled, { keyframes } from 'styled-components';
import { themeProps } from '../App';

const moveAnimation = keyframes`
  0% { transform: translateX(0); }
  50% { transform: translateX(-100px); }
  100% { transform: translateX(0); }
`;

const StyledSVG = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  animation: ${moveAnimation} 5s linear infinite both;
`;

const StyledSVG2 = styled(StyledSVG)`
  animation-delay: 2s;
`;

const StyledSVG3 = styled(StyledSVG)`
  animation-delay: 3s;
`;

const StyledWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  transform: scale(1.3);
`;

interface FooterProps {
  dark: themeProps;
  theme: themeProps;
}

export default function FooterWaves({ dark, theme }: FooterProps) {
  const wavesColor = theme === dark ? '#2E282A' : '#F1D302';
  return (
    <StyledWrapper>
      <StyledSVG xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
        <path
          fill={wavesColor}
          fillOpacity='.8'
          d='M0,128L60,122.7C120,117,240,107,360,133.3C480,160,600,224,720,245.3C840,267,960,245,1080,208C1200,171,1320,117,1380,90.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'
        ></path>
      </StyledSVG>
      <StyledSVG2 xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
        <path
          fill={wavesColor}
          fillOpacity='.7'
          d='M0,32L60,32C120,32,240,32,360,42.7C480,53,600,75,720,85.3C840,96,960,96,1080,112C1200,128,1320,160,1380,176L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'
        ></path>
      </StyledSVG2>
      <StyledSVG3 xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
        <path
          fill={wavesColor}
          fillOpacity='.6'
          d='M0,256L60,218.7C120,181,240,107,360,69.3C480,32,600,32,720,42.7C840,53,960,75,1080,85.3C1200,96,1320,96,1380,96L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'
        ></path>
      </StyledSVG3>
    </StyledWrapper>
  );
}

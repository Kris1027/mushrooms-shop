import { styled } from 'styled-components';

const StyledLogo = styled.h1`
  font-size: 2rem;
  font-family: 'Berkshire Swash', serif;
  color: #ffdd00;

  @media (max-width: 840px) {
    font-size: 1.8rem;
  }

  @media (max-width: 430px) {
    font-size: 1.6rem;
  }
`;

export default function Logo() {
  return <StyledLogo>Hummer Mushrooms</StyledLogo>;
}

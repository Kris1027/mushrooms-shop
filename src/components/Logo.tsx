import { Link } from 'react-router-dom';

import { styled } from 'styled-components';

export default function Logo() {
  return (
    <LogoWrapper>
      <Link to='/'>Hummer Mushrooms</Link>
    </LogoWrapper>
  );
}

const LogoWrapper = styled.h1`
  min-width: 295px;

  a {
    color: ${(props) => props.theme.secondary};
    font-family: 'Berkshire Swash', serif;
    font-size: 2rem;
    text-decoration: none;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 768px) {
    min-width: 230px;
  }
`;

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
  min-width: 300px;

  a {
    font-size: 2rem;
    font-family: 'Berkshire Swash', serif;
    color: ${(props) => props.theme.secondary};
    text-decoration: none;
  }
`;

import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const LogoWrapper = styled.h1`
  a {
    font-size: 2rem;
    font-family: 'Berkshire Swash', serif;
    color: ${(props) => props.theme.secondary};
    text-decoration: none;
  }
`;

export default function Logo() {
  return (
    <LogoWrapper>
      <Link to='/'>Hummer Mushrooms</Link>
    </LogoWrapper>
  );
}

import styled from 'styled-components';

export default function Footer() {
  const StyledFooter = styled.footer`
    background-color: #222222;
    color: #000;
    font-family: 'Berkshire Swash', serif;
    padding: 0.5rem;
    text-align: center;

    & a {
      color: #ff0069;
      text-decoration: none;
      font-size: 1.3rem;

      &:hover {
        color: #000;
      }
    }
  `;

  return (
    <StyledFooter>
      <h1>
        Crafted with love by{' '}
        <a
          href='https://www.linkedin.com/in/krzysztof-obarzanek-6b8803254/'
          target='blank'
        >
          Kris1027
        </a>
      </h1>
    </StyledFooter>
  );
}

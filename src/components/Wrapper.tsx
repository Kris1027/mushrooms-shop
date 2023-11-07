import styled from 'styled-components';

type WrapProps = {
  children: React.ReactNode;
};

export default function Wrapper({ children }: WrapProps) {
  return <Content>{children}</Content>;
}

const Content = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: start;
  gap: 3rem;
  padding: 3rem 5rem;
  min-height: 80vmin;
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;

  a {
    text-decoration: none;
  }
`;

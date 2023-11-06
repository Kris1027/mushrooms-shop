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
  padding: 3rem 0;
  min-height: 100vmin;
  max-width: 1280px;
  margin: 0 auto;

  a {
    text-decoration: none;
  }
`;

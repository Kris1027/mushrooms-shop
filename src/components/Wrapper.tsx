import styled from 'styled-components';

type WrapProps = {
  children: React.ReactNode;
};

export default function Wrapper({ children }: WrapProps) {
  return <Content>{children}</Content>;
}

const Content = styled.main`
  margin: 0 auto;
  max-width: 1280px;
  min-height: 65vh;
  padding: 3rem 5rem;

  @media (max-width: 768px) {
    max-width: 768px;
    padding: 1rem 1rem;
  }
`;

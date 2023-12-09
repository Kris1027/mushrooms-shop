import styled from 'styled-components';

type WrapProps = {
  children: React.ReactNode;
};

export default function Wrapper({ children }: WrapProps) {
  return <Content>{children}</Content>;
}

const Content = styled.main`
  padding: 3rem 5rem;
  min-height: 65vh;
  max-width: 1280px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem 1rem;
    max-width: 768px;
  }
`;

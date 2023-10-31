import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1280px;
  margin: 0 auto;
`;

export default function App() {
  return (
    <StyledWrapper>
      <Header />
      <Outlet />
      <Footer />
    </StyledWrapper>
  );
}

import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  max-width: 1280px;
  min-width: 410px;
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

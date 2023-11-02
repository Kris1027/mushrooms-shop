import { type FunctionComponent } from 'react';
import { HiBars4 } from 'react-icons/hi2';
import { styled } from 'styled-components';

const StyledBurgerIcon = styled.div`
  font-size: 3rem;
`;

const Burger: FunctionComponent = () => {
  return (
    <StyledBurgerIcon>
      <HiBars4 />
    </StyledBurgerIcon>
  );
};

export default Burger;

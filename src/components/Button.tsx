import styled from 'styled-components';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({ children, onClick, type }: ButtonProps) {
  return (
    <StyledButton onClick={onClick} type={type}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  font-size: 1.5rem;
  padding: 0.6rem 2rem;
  background-color: ${(props) => props.theme.third};
  color: ${(props) => props.theme.primary};
  border-radius: 16px;
  border: none;
  cursor: pointer;
  font-weight: 700;

  &:hover {
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.third};
  }

  &:active {
    transform: scale(0.9);
  }

  &:focus {
    outline: none;
    color: ${(props) => props.theme.secondary};
  }
`;

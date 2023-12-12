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
  background-color: ${(props) => props.theme.third};
  border: none;
  border-radius: 16px;
  color: ${(props) => props.theme.primary};
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 700;
  padding: 0.6rem 2rem;

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

  @media (max-width: 768px) {
    font-size: 0.7rem;
    padding: 0.6rem 1rem;
  }
`;

import styled from 'styled-components';

interface FormProps {
  type?: string;
  placeholder?: string;
  id?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoComplete?: string;
}

export default function Input({
  type,
  placeholder,
  id,
  value,
  onChange,
  autoComplete,
}: FormProps) {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      id={id}
      value={value}
      onChange={onChange}
      autoComplete={autoComplete}
    />
  );
}

const StyledInput = styled.input`
  font-size: 1.5rem;
  border-radius: 10px;
  border: none;
  padding: 0.6rem 2rem;
  background-color: ${(props) => props.theme.primary};

  &:focus {
    outline: none;
    transform: scale(0.9);
  }

  &:active {
    transform: scale(0.9);
  }

  &::placeholder {
    color: ${(props) => props.theme.secondary};
    padding: 0.4rem;
  }
`;

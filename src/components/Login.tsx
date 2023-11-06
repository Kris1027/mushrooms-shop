import styled from 'styled-components';

export default function Login() {
  return (
    <Wrapper>
      <Heading>Zaloguj się</Heading>
      <Txt>Masz już konto?</Txt>
      <Input type='text' placeholder='Login' />
      <Input type='text' placeholder='Hasło' />
      <Button type='submit'>Zaloguj się</Button>
    </Wrapper>
  );
}

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 400px;
  border-radius: 16px;
  padding: 2rem;

  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
`;

const Heading = styled.h1`
  font-size: 3rem;
  color: ${(props) => props.theme.secondary};
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
`;

const Txt = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  font-size: 1.5rem;
  margin-bottom: 0.8rem;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  border: none;
  background-color: ${(props) => props.theme.secondary};

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  font-size: 1.5rem;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  border: none;
  background-color: ${(props) => props.theme.third};
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:active {
    transform: scale(1.1);
  }
`;

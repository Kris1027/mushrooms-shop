import styled from 'styled-components';

export default function Login() {
  const Wrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 400px;
    background-color: #767676;
    border-radius: 16px;
    padding: 2rem;
    margin: 0 auto;
  `;

  const Heading = styled.h1`
    font-size: 3rem;
    color: ${(props) => props.theme.primary};
    font-weight: 700;
  `;

  const Txt = styled.p`
    margin-top: 0.4rem;
    margin-bottom: 4rem;
    opacity: 0.7;
  `;

  const Input = styled.input`
    font-size: 1.5rem;
    margin-bottom: 0.3rem;
    width: 100%;
    height: 50px;
    border-radius: 10px;
    border: none;

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

    &:focus {
      outline: none;
    }

    &:active {
      transform: scale(1.1);
    }
  `;

  return (
    <Wrapper>
      <Heading>Zaloguj się</Heading>
      <Txt>Wprowadź swoje dane</Txt>
      <Input type='text' placeholder='login' />
      <Input type='text' placeholder='hasło' />
      <Button type='submit'>Zaloguj się</Button>
    </Wrapper>
  );
}

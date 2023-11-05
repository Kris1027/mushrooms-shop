import styled from 'styled-components';

export default function Login() {
  const Wrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 400px;
    border-radius: 16px;
    padding: 2rem;
    margin: 0 auto;

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
  `;

  const Txt = styled.p`
    margin-top: 0.4rem;
    margin-bottom: 4rem;
    opacity: 0.7;
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

  return (
    <Wrapper>
      <Heading>Zaloguj się</Heading>
      <Txt>Wprowadź swoje dane</Txt>
      <Input type='text' />
      <Input type='text' />
      <Button type='submit'>Zaloguj się</Button>
    </Wrapper>
  );
}

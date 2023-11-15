import { useState } from 'react';

import styled from 'styled-components';

import Button from '../components/Button';
import Input from '../components/Input';
import { useLogin } from './useLogin';

export default function LoginForm() {
  const [email, setEmail] = useState('admin@admin.com');
  const [password, setPassword] = useState('123456789');
  const { login, isLoading } = useLogin();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !password) return;
    login({ email, password });
  }

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Txt>Masz już konto?</Txt>
      <Heading>Zaloguj się!</Heading>
      <Input
        type='email'
        id='email'
        value={email}
        placeholder='Adres e-mail'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
        disabled={isLoading}
      />
      <Input
        type='password'
        id='password'
        value={password}
        placeholder='Hasło'
        onChange={(e) => setPassword(e.target.value)}
        disabled={isLoading}
      />
      <Button type='submit'>
        {!isLoading ? 'Zaloguj się' : 'Ładowanie...'}
      </Button>
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

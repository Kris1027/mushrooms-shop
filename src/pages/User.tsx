import LoginForm from '../authentication/LoginForm';
import Register from '../authentication/Register';
import Wrapper from '../components/Wrapper';

export default function User() {
  return (
    <Wrapper>
      <LoginForm />
      <Register />
    </Wrapper>
  );
}

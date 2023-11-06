import Login from '../components/Login';
import Register from '../components/Register';
import Wrapper from '../components/Wrapper';

export default function User() {
  return (
    <Wrapper>
      <Login />
      <Register />
    </Wrapper>
  );
}

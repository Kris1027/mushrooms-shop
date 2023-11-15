import LoginForm from '../authentication/LoginForm';
import { useUser } from '../authentication/useUser';
import Wrapper from '../components/Wrapper';

export default function User() {
  const { isAuthenicated } = useUser();

  return <Wrapper>{!isAuthenicated && <LoginForm />}</Wrapper>;
}

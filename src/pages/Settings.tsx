import LoginForm from '../authentication/LoginForm';
import { useUser } from '../authentication/useUser';
import UserSettings from '../components/UserSettings';
import Wrapper from '../components/Wrapper';

export default function Settings() {
  const { isAuthenicated } = useUser();

  return (
    <Wrapper>
      {!isAuthenicated && <LoginForm />}
      {isAuthenicated && <UserSettings />}
    </Wrapper>
  );
}

import { HiArrowRightOnRectangle, HiUser } from 'react-icons/hi2';
import { useLogout } from './useLogout';
import styled from 'styled-components';
import { useUser } from './useUser';
import { Link } from 'react-router-dom';

export default function Logout() {
  const { logout } = useLogout();
  const { isAuthenicated } = useUser();

  if (!isAuthenicated) return null;

  return (
    <Wrapper>
      <AdminDashboard to='admin-dashboard'>
        <HiUser />
      </AdminDashboard>
      <ButtonIcon onClick={() => logout()}>
        <HiArrowRightOnRectangle />
      </ButtonIcon>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-content: center;

  a {
    color: ${(props) => props.theme.secondary};
  }
`;

const ButtonIcon = styled.div`
  cursor: pointer;
`;

const AdminDashboard = styled(Link)`
  text-decoration: none;
`;

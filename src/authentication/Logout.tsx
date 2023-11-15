import { HiArrowRightOnRectangle } from 'react-icons/hi2';
import { useLogout } from './useLogout';
import styled from 'styled-components';
import { useUser } from './useUser';

import { GrUserAdmin } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
  const { logout } = useLogout();
  const { isAuthenicated } = useUser();
  const navigate = useNavigate();

  if (!isAuthenicated) return null;

  return (
    <>
      <ButtonIcon onClick={() => navigate('/admin-dashboard')}>
        <GrUserAdmin />
      </ButtonIcon>
      <ButtonIcon onClick={logout}>
        <HiArrowRightOnRectangle />
      </ButtonIcon>
    </>
  );
}

const ButtonIcon = styled.button`
  cursor: pointer;
`;
